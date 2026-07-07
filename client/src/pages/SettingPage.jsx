
import Fade from '../components/motion/Fade'
import Titlebar from '../components/cards/Titlebar'
import ThemeSetting from '../components/setting.jsx/ThemeSetting'
import GlassCard from '../components/cards/GlassCard'
import IconSetting from '../components/setting.jsx/IconSetting'
import SlideX from '../components/motion/SlideX'

const settingArray = [
  {
    component: ThemeSetting,
    delay: 0.25,
  },
  {
    component: IconSetting,
    delay: 0.5,
  },
];
const SettingPage = () => {
  return (
    <Fade className='flex flex-col h-screen'>
      <Titlebar name={"Setting"} />
      <div className='flex-1 overflow-y-auto max-w-2xl w-full p-5 mx-auto flex flex-col gap-5 justify-center'>
        {settingArray.map((item) => (
          <>
            <SlideX delay={item.delay} value={'100vw'} duration={0.5}>
              <GlassCard className='py-2 px-5'>
                <item.component />
              </GlassCard>
            </SlideX>
          </>
        ))}
      </div>
    </Fade>
  )
}

export default SettingPage