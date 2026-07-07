import { useContext, } from 'react'
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs'
import { ThemeContext } from '../../context/ThemeContext';
import {motion} from 'motion/react'

const ThemeToggleButton = () => {

    const { theme, setTheme } = useContext(ThemeContext);

    const themeHandle = () => setTheme(prev => (prev === "dark" ? "light" : "dark"));

    const buttonClass = 'w-8 h-8 rounded-full flex items-center justify-center text-sm'
    return (
        <button onClick={themeHandle} className='relative flex p-1 border border-active rounded-full cursor-pointer'>
            <div className={buttonClass} ><BsSunFill /></div>
            <div className={buttonClass} ><BsMoonStarsFill /></div>

            <motion.div
                animate={{
                    x: theme === "dark" ? '100%' : 0
                } }
                className={` absolute inset-y-1 left-1 rounded-full border border-active -z-5 transition-transform duration-200 ease-in-out ${buttonClass} bg-active/70`}
            />
        </button>
    )
}

export default ThemeToggleButton