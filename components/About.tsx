"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import { PageInfo } from "@/typings";
import { urlFor } from "@/sanity";
type Props = {
    pageInfo: PageInfo | null;
};

const About = ({ pageInfo }: Props) => {
    
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly items-center mx-auto'
        >
            <h3 className='flex items-center justify-center absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>
                About
            </h3>

            <div className='flex flex-col md:flex-row items-center justify-center mt-32'>
                <motion.div
                    initial={{
                        x: -200,
                        opacity: 0,
                    }}
                    whileInView={{
                        x: 0,
                        opacity: 1,
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2 }}
                    className='relative md:mb-0 flex shrink-0 w-48 h-48 rounded-full object-cover md:rounded-lg md:w-64 md:h-64 lg:w-[400px] lg:h-[400px] overflow-hidden scale-125'
                >
                    {pageInfo && pageInfo.heroImage && (
                        <Image
                            src={
                                urlFor(pageInfo.heroImage)?.url() || 
                                 "/img2.jpg"
                            }
                            fill
                            alt=' Hardik Bhammar  '
                            className='md:mb-0 flex shrink-0 w-48 h-48 rounded-full object-contain  md:rounded-lg md:w-64 md:h-64 lg:w-[400px] lg:h-[400px] overflow-hidden scale-125'
                        />
                    )}
                </motion.div>
                <div className='space-y-10 px-0 md:px-10 mt-5 md:mt-10'>
                    <h4 className='text-2xl md:text-4xl font-semibold '>
                        Here is a{" "}
                        <span className='underline decoration-[#F7AB0A]/50'>
                            little
                        </span>{" "}
                        background
                    </h4>
                    <p className='text-xs md:text-sm lg:text-base text-center md:text-left'>
                      {  pageInfo?.backgroundInformation}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};
export default About;