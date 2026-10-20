import TopBackground from './components/Hero/TopBackground'
import HeroScene from './components/Hero/HeroScene'
import Navbar from './components/Navbar'
import Sections from './components/Sections'

export default function Home() {
  return (
    <div className='relative isolate min-h-screen overflow-clip' id='home'>
      <HeroScene />
      <Sections />
      <Navbar />
      <TopBackground />
    </div>
  )
}
