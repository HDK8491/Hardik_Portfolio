"use client";
import { motion } from "framer-motion";
const BackgroundCircles = () => {
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            animate={{
                scale: [1, 5, 0, 1],
                opacity: [0.5, 0.2, 0.3, 0, 0, 1.0],
                borderRadius: ["20%", "20%", "50%", "80%", "20%"],
            }}
            transition={{ duration: 1.5 }}
            className='relative flex justify-center items-center '
        >
            <div className='absolute border border-[#333333] rounded-full h-[100px] w-[100px] mt-52 animate-ping' />

            <div className='absolute border border-[#3333] rounded-full h-[300px] w-[300px] mt-52 ' />

            <div className='absolute border border-[#3333] rounded-full h-[500px] w-[500px] mt-52 ' />

            <div className='rounded-full border border-[#F7AB0A] opacity-20 h-[700px] w-[700px] absolute mt-52 animate-pulse' />
            <div className='rounded-full border border-[#3333] opacity-20 h-[800px] w-[800px] absolute mt-54 ' />
        </motion.div>
    );
};

export default BackgroundCircles;