import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

import mine from "../assets/mine.jpg";
import SlideY from "../components/motion/SlideY";
import UnLock from "../components/motion/UnLock";

const LockPage = () => {
    const navigate = useNavigate();

    const handleUnlock = () => navigate("/home")

    return (
        <UnLock delay={0}
            onClick={handleUnlock}
            className="min-h-screen flex flex-col items-center justify-center cursor-pointer select-none tracking-widest"
        >
            <motion.img
                src={mine}
                alt="Gursharan Singh"
                initial={{
                    opacity: 0,
                    scale: 0.8,
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    delay: 0.2,
                    duration: 0.6,
                }}
                className="w-40 h-40 rounded-full border-2 border-white object-cover object-top"
            />

            <SlideY as="p" delay={0.4} className={"mt-5 text-xl font-bold text-text"}>
                Welcome To
            </SlideY>

            <SlideY as="p" delay={0.6} className={"text-sm font-medium text-text-muted"}>
                Gursharan Singh Portfolio
            </SlideY>

            <motion.p
                animate={{
                    opacity: [0.3, 1, 0.3],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="fixed bottom-5 inset-x-0 text-center text-xs font-semibold text-text uppercase"
            >
                Tap Anywhere to Explore Portfolio
            </motion.p>
        </UnLock>
    );
};

export default LockPage;