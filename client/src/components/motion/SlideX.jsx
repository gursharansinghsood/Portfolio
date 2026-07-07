import { motion } from "motion/react";

const SlideX = ({
    as = "div",
    children,
    className = "",
    delay = 0,
    duration = 0.2,
    value = 20,
    ease = "easeOut",
    ...props
}) => {
    const Component = motion[as];

    return (
        <Component
            className={className}
            initial={{
                opacity: 0,
                x: value,
            }}
            animate={{
                opacity: 1,
                x: 0,
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

export default SlideX;