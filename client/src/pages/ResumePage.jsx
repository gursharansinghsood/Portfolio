
import Titlebar from '../components/cards/Titlebar'
import Fade from '../components/motion/Fade'
import resume from '../assets/resume.pdf'
import ButtonMotion from '../components/motion/ButtonMotion'


const buttonClass = 'px-4 py-2 font-bold text-lg rounded-xl border border-border backdrop-blur-xl bg-white/20'

const ResumePage = () => {
    return (
        <Fade className='h-full flex flex-col'>
            <Titlebar name={"Resume"} />

            <iframe src={resume} className='flex-1 hidden sm:block'></iframe>

            <div className='flex-1 flex flex-col justify-center items-center gap-5  block sm:hidden'>
                <a href={resume} target='_blank'>
                    <ButtonMotion className={buttonClass}>
                        View Resume
                    </ButtonMotion>
                </a>
                <a href={resume} download>
                    <ButtonMotion className={buttonClass}>
                        Download Resume
                    </ButtonMotion>
                </a>
            </div>
        </Fade>
    )
}

export default ResumePage