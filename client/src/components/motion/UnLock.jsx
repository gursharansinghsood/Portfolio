import { motion } from "motion/react";

const UnLock = ({
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
            transition={{
                duration,
                delay,
                ease,
            }}
            exit={{
                opacity: 0,
                y: '-100vh'
            }}

            {...props}
        >
            {children}
        </Component>
    );
};

export default UnLock;