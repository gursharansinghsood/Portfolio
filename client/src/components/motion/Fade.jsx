import { motion } from "motion/react";

const Fade = ({
    as = "div",
    children,
    className = "",
    delay = 0,
    duration = 0.2,
    ease = "easeOut",
    ...props
}) => {
    const Component = motion[as];

    return (
        <Component
            className={className}
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            transition={{
                duration,
                delay,
                ease,
            }}
            exit={{
                opacity: 0,
            }}

            {...props}
        >
            {children}
        </Component>
    );
};

export default Fade;