import { BsArrowLeftCircleFill, BsXCircleFill } from 'react-icons/bs'
import GlassCard from './GlassCard'
import ButtonMotion from '../motion/ButtonMotion'
import { replace, useNavigate } from 'react-router-dom'

const Titlebar = ({ name }) => {
    const navigate = useNavigate()

    return (
        <GlassCard className="flex items-center justify-between rounded-b-none bg-bg/50 px-5 py-2 text-xl">

            <ButtonMotion
                className='text-2xl cursor-pointer'
                onClick={() => navigate(-1, replace)}
            >
                <BsArrowLeftCircleFill />
            </ButtonMotion>

            <p className='font-bold'>{name}</p>

            <ButtonMotion
                className='text-2xl cursor-pointer'
                onClick={() => navigate('/home')}
            >
                < BsXCircleFill />
            </ButtonMotion>
        </GlassCard>
    )
}

export default Titlebar