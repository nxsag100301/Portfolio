'use client'

import { useEffect, useRef } from 'react'
import {
  AmbientLight,
  ACESFilmicToneMapping,
  AdditiveBlending,
  BufferAttribute,
  BufferGeometry,
  CanvasTexture,
  DoubleSide,
  Group,
  Material,
  Mesh,
  MeshBasicMaterial,
  MeshPhysicalMaterial,
  PerspectiveCamera,
  PointLight,
  Points,
  PointsMaterial,
  Scene,
  SphereGeometry,
  Sprite,
  SpriteMaterial,
  Timer,
  TorusGeometry,
  WebGLRenderer
} from 'three'

const HeroScene = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const scene = new Scene()
    const camera = new PerspectiveCamera(42, 1, 0.1, 100)
    camera.position.set(0, 0, 9.5)

    const renderer = new WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
    renderer.outputColorSpace = 'srgb'
    renderer.toneMapping = ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.2
    renderer.domElement.style.display = 'block'
    container.appendChild(renderer.domElement)

    scene.add(new AmbientLight('#fff0d2', 0.75))

    const sunlight = new PointLight('#ffe7b0', 90, 18, 1.35)
    scene.add(sunlight)

    const solarSystem = new Group()
    scene.add(solarSystem)

    const sun = new Mesh(
      new SphereGeometry(0.43, 48, 48),
      new MeshPhysicalMaterial({
        color: '#fff0bd',
        emissive: '#ffad32',
        emissiveIntensity: 3.2,
        roughness: 0.4,
        clearcoat: 0.8
      })
    )
    solarSystem.add(sun)

    const glowCanvas = document.createElement('canvas')
    glowCanvas.width = 128
    glowCanvas.height = 128
    const glowContext = glowCanvas.getContext('2d')
    if (glowContext) {
      const gradient = glowContext.createRadialGradient(64, 64, 2, 64, 64, 64)
      gradient.addColorStop(0, 'rgba(255, 239, 190, 0.96)')
      gradient.addColorStop(0.22, 'rgba(255, 184, 74, 0.52)')
      gradient.addColorStop(1, 'rgba(255, 158, 48, 0)')
      glowContext.fillStyle = gradient
      glowContext.fillRect(0, 0, 128, 128)
    }
    const glowTexture = new CanvasTexture(glowCanvas)
    const sunGlow = new Sprite(
      new SpriteMaterial({
        map: glowTexture,
        color: '#ffe4a1',
        transparent: true,
        opacity: 0.9,
        depthWrite: false,
        blending: AdditiveBlending
      })
    )
    sunGlow.scale.set(2.3, 2.3, 1)
    solarSystem.add(sunGlow)

    const orbitMaterial = new MeshBasicMaterial({
      color: '#f0d69a',
      transparent: true,
      opacity: 0.2,
      depthWrite: false
    })
    const planetSpecs = [
      {
        name: 'Mercury',
        radius: 0.8,
        size: 0.07,
        color: '#a9a39a',
        speed: 0.72,
        phase: 0.3,
        tilt: 0.025
      },
      {
        name: 'Venus',
        radius: 1.18,
        size: 0.11,
        color: '#e9bd7a',
        speed: 0.52,
        phase: 2.4,
        tilt: -0.035
      },
      {
        name: 'Earth',
        radius: 1.62,
        size: 0.12,
        color: '#6e9fc0',
        speed: 0.4,
        phase: 4.1,
        tilt: 0.04
      },
      {
        name: 'Mars',
        radius: 2.05,
        size: 0.09,
        color: '#cf7958',
        speed: 0.32,
        phase: 1.7,
        tilt: -0.055
      },
      {
        name: 'Jupiter',
        radius: 2.58,
        size: 0.25,
        color: '#d6a77c',
        speed: 0.22,
        phase: 5.2,
        tilt: 0.035
      },
      {
        name: 'Saturn',
        radius: 3.18,
        size: 0.2,
        color: '#e3c58c',
        speed: 0.17,
        phase: 2.9,
        tilt: -0.045
      },
      {
        name: 'Uranus',
        radius: 3.85,
        size: 0.15,
        color: '#8fc9cf',
        speed: 0.12,
        phase: 0.9,
        tilt: 0.055
      },
      {
        name: 'Neptune',
        radius: 4.5,
        size: 0.15,
        color: '#648bd2',
        speed: 0.09,
        phase: 3.8,
        tilt: -0.025
      }
    ]

    const planets: Array<{
      orbit: Group
      planet: Mesh
      speed: number
      phase: number
    }> = []

    for (const spec of planetSpecs) {
      const orbitLine = new Mesh(
        new TorusGeometry(spec.radius, 0.004, 6, 180),
        orbitMaterial
      )
      orbitLine.rotation.x = spec.tilt
      solarSystem.add(orbitLine)

      const orbit = new Group()
      orbit.rotation.x = spec.tilt
      solarSystem.add(orbit)

      const planet = new Mesh(
        new SphereGeometry(spec.size, 32, 32),
        new MeshPhysicalMaterial({
          color: spec.color,
          roughness: 0.78,
          metalness: 0.04,
          clearcoat: 0.25,
          clearcoatRoughness: 0.6
        })
      )
      planet.position.x = spec.radius
      orbit.add(planet)

      if (spec.name === 'Saturn') {
        const rings = new Mesh(
          new TorusGeometry(spec.size * 1.55, spec.size * 0.24, 5, 64),
          new MeshBasicMaterial({
            color: '#d9bd8b',
            transparent: true,
            opacity: 0.8,
            side: DoubleSide,
            depthWrite: false
          })
        )
        rings.rotation.x = Math.PI / 2.25
        planet.add(rings)
      }

      planets.push({
        orbit,
        planet,
        speed: spec.speed,
        phase: spec.phase
      })
    }

    const distantStarsCount = 700
    const distantPositions = new Float32Array(distantStarsCount * 3)
    for (let index = 0; index < distantStarsCount; index += 1) {
      const offset = index * 3
      distantPositions[offset] = (Math.random() - 0.5) * 18
      distantPositions[offset + 1] = (Math.random() - 0.5) * 12
      distantPositions[offset + 2] = -1 - Math.random() * 5
    }

    const distantGeometry = new BufferGeometry()
    distantGeometry.setAttribute(
      'position',
      new BufferAttribute(distantPositions, 3)
    )
    const distantStars = new Points(
      distantGeometry,
      new PointsMaterial({
        color: '#fff0ca',
        size: 0.022,
        transparent: true,
        opacity: 0.72,
        sizeAttenuation: true,
        depthWrite: false
      })
    )
    scene.add(distantStars)

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
    const timer = new Timer()
    timer.connect(document)
    let frameId = 0
    let isPageVisible = document.visibilityState === 'visible'

    const resize = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      if (!width || !height) return
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
      solarSystem.position.x = width >= 1280 ? 0.55 : width >= 640 ? 0.1 : 0
      const scale =
        width < 640 ? 0.38 : width < 1024 ? 0.58 : width < 1280 ? 1 : 1.28
      solarSystem.scale.setScalar(scale)
      if (reduceMotion) renderer.render(scene, camera)
    }

    const handleVisibilityChange = () => {
      isPageVisible = document.visibilityState === 'visible'
      if (isPageVisible && !reduceMotion && frameId === 0) {
        frameId = window.requestAnimationFrame(render)
      } else if (!isPageVisible) {
        window.cancelAnimationFrame(frameId)
        frameId = 0
      }
    }

    const render = (timestamp: number) => {
      frameId = 0
      if (!isPageVisible && !reduceMotion) return

      timer.update(timestamp)
      const elapsed = timer.getElapsed()
      if (!reduceMotion) {
        sun.rotation.y = elapsed * 0.08
        planets.forEach(({ orbit, planet, speed, phase }) => {
          orbit.rotation.z = phase + elapsed * speed
          planet.rotation.y = elapsed * 0.45
        })
      }

      renderer.render(scene, camera)
      if (!reduceMotion && isPageVisible) {
        frameId = window.requestAnimationFrame(render)
      }
    }

    resize()
    window.addEventListener('resize', resize)
    document.addEventListener('visibilitychange', handleVisibilityChange)

    if (reduceMotion) {
      render(performance.now())
    } else if (isPageVisible) {
      frameId = window.requestAnimationFrame(render)
    }

    return () => {
      window.cancelAnimationFrame(frameId)
      timer.dispose()
      window.removeEventListener('resize', resize)
      document.removeEventListener('visibilitychange', handleVisibilityChange)

      const disposedMaterials = new Set<Material>()
      scene.traverse((object) => {
        if (object instanceof Mesh || object instanceof Points) {
          object.geometry.dispose()
          const materials = Array.isArray(object.material)
            ? object.material
            : [object.material]
          materials.forEach((material) => {
            if (!disposedMaterials.has(material)) {
              disposedMaterials.add(material)
              material.dispose()
            }
          })
        } else if (object instanceof Sprite) {
          object.material.map?.dispose()
          if (!disposedMaterials.has(object.material)) {
            disposedMaterials.add(object.material)
            object.material.dispose()
          }
        }
      })
      renderer.dispose()
      renderer.domElement.remove()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      aria-hidden='true'
      className='pointer-events-none fixed inset-0 z-0 h-[100dvh] w-screen opacity-60'
    />
  )
}

export default HeroScene
