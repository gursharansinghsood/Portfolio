import { motion } from "motion/react";

const ButtonMotion = ({
    as = "div",
    children,
    className = "",
    ...props
}) => {
    const Component = motion[as];

    return (
        <Component
            className={className}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            {...props}
        >
            {children}
        </Component>
    );
};

export default ButtonMotion;