import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { BsFillXCircleFill } from "react-icons/bs";
import ButtonMotion from "../motion/ButtonMotion";

const Image = ({ item }) => {
    const [show, setShow] = useState(false);

    return (
        <>
            <motion.img
                src={item}
                alt=""
                loading="lazy"
                decoding="async"
                className="cursor-pointer rounded-xl border border-border"
                whileTap={{ scale: 0.95 }}
                onClick={() => setShow(true)}
            />

            <AnimatePresence>
                {show && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-5"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        onClick={() => setShow(false)}
                    >
                        <motion.img
                            src={item}
                            alt=""
                            loading="lazy"
                            decoding="async"
                            className="max-h-[90vh] max-w-[90vw] rounded-xl"
                            initial={{ scale: 0.5 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.5 }}
                            transition={{ duration: 0.25 }}
                            onClick={(e) => e.stopPropagation()}
                        />

                        <ButtonMotion
                            onClick={() => setShow(false)}
                            className="absolute top-5 right-5 cursor-pointer"
                        >
                            <BsFillXCircleFill size={30} />
                        </ButtonMotion>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default React.memo(Image);