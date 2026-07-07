import { motion } from "motion/react";

const AMotion = ({ to, children, className = "", ...props }) => {
    const Component = motion.a;

    return (
        <Component
            href={to}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={className}
            {...props}
        >
            {children}
        </Component>
    );
};

export default AMotion;