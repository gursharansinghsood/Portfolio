import { Link } from 'react-router-dom'
import { motion } from "motion/react";

const Component = motion.create(Link);

const LinkMotion = ({ to, children, className = "" }) => {
    return (
        <Component
            to={to}
            whileHover={{scale: 1.05}}
            whileTap={{ scale: 0.95 }}
            className={`${className} `}>
            {children}
        </Component>
    )
}

export default LinkMotion