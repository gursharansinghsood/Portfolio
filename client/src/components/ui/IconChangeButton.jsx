import { useContext, useEffect } from 'react'
import ButtonMotion from '../motion/ButtonMotion'
import { IconContext } from '../../context/IconContext'



const IconChangeButton = ({ item }) => {
    const { icon, setIcon } = useContext(IconContext)

    const handleClick = () => {
        setIcon(item.className)
    }
    useEffect(() => localStorage.setItem('icon', icon), [icon])

    return (
        <div>
            <ButtonMotion className={`w-10 h-10 border bg-surface/70 cursor-pointer
                ${icon === item.className ? 'border-active' : 'border-border'} 
                ${item.className}`}
                onClick={handleClick}
            ></ButtonMotion>
        </div>
    )
}

export default IconChangeButton