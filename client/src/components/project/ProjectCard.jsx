
import LinkMotion from '../motion/LinkMotion'
import { BsArrowRight } from 'react-icons/bs'
import GlassCard from '../cards/GlassCard'

const ProjectCard = ({ item }) => {
    const Icon = item.icon
    return (
        <GlassCard className='flex items-start gap-5 p-5'>
            <div className='bg-surface h-fit w-fit flex justify-center items-center rounded-xl p-3 text-2xl'><Icon /></div>
            <div className='grid grid-cols-1 gap-2 text-justify'>
                <p className='text-lg font-bold'>{item.name}</p>
                <p className='line-clamp-2 text-xs'>{item.description}</p>
                <LinkMotion to={`/project/${item.id}`} className='flex items-center gap-2 text-sm font-bold text-active w-fit truncate'>View Project <BsArrowRight size={20} /></LinkMotion>
            </div>
        </GlassCard>
    )
}

export default ProjectCard