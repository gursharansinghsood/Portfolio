
import ProjectCard from '../components/project/ProjectCard'
import Titlebar from '../components/cards/Titlebar'
import { projectList } from '../services/projectList'
import Fade from '../components/motion/Fade'

const ProjectsPage = () => {
    return (
        <Fade>
            <Titlebar name={'All Projects'} />
            <div className='grid sm:grid-cols-2 grid-cols-1  gap-10  p-10'>
                {projectList.map((item) => (
                    <ProjectCard item={item} key={item.id} />
                ))}
            </div>
        </Fade>
    )
}

export default ProjectsPage