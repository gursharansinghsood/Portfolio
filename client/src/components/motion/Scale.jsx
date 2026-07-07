import { motion} from "motion/react";

const Scale = ({
    as = "div",
    children,
    className = "",
    delay = 0,
    duration = 0.2,
    value = 0.8,
    ease = "easeOut",
    ...props
}) => {
    const Component = motion[as];

    return (
        <Component
            className={className}
            initial={{
                opacity: 0,
                scale: value,
            }}
            animate={{
                opacity: 1,
                scale: 1,
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

export default Scale;