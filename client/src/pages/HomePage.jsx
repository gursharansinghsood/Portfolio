
import DockAppsCard from '../components/cards/DockAppsCard'
import SlideY from '../components/motion/SlideY'
import DesktopApps from '../components/homePage/DesktopApps'
import Time from '../components/ui/Time'

const HomePage = () => {
  return (
    <SlideY value={'100vh'} className='relative min-h-screen p-2'>
      <Time className='text-center tracking-widest font-bold text-sm' />
      <DesktopApps />
      <DockAppsCard />
    </SlideY>
  )
}

export default HomePage