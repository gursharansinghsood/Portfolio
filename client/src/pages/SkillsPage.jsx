
import Titlebar from '../components/cards/Titlebar'
import Fade from '../components/motion/Fade'
import { skillsList } from '../services/skillsList'
import SkillCard from '../components/cards/SkillCard'

const SkillsPage = () => {
  return (
    <Fade className='flex flex-col h-screen'>
      <Titlebar name={"Skils"} />
      <div className='flex-1 p-5 overflow-y-auto flex flex-col max-w-2xl mx-auto w-full'>
        <p className='text-xl font-bold mb-5'>My Technical Skills</p>

        {skillsList.map((item) => (
          <SkillCard item={ item} />
        ))}

      </div>
    </Fade>
  )
}

export default SkillsPage