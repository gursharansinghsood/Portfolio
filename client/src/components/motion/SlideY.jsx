import { motion } from "motion/react";

const SlideY = ({
    as = "div",
    children,
    className = "",
    delay = 0,
    duration = 0.2,
    value = 20,
    ease = "easeInOut",
    ...props
}) => {
    const Component = motion[as];

    return (
        <Component
            className={className}
            initial={{
                opacity: 0,
                y: value,
            }}
            animate={{
                opacity: 1,
                y: 0,
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

export default SlideY;