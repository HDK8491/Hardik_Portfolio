import { Education } from "@/typings";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

type Props = {
    details: Education;
};

const EducationCard = ({ details }: Props) => {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-7 mt-10 flex-shrink-0 w-[350px]  md:w-[500px] xl:w-[600px]  bg-[#363636] p-5 md:p-10 opacity-60 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden pb-4 snap-center'>
            <div className='px-0 md:px-10 mx-auto '>
                <h4 className='text-xl font-light'>{details.company}</h4>
                <p className='text-xl md:text-2xl font-bold mt-1 text-[#f7AB0A]'>
                    {/* Computer Science and Engineering */}
                    {details.jobTitle}
                </p>
                <div className='flex space-x-2 my-2'></div>
                <p className='uppercase  text-gray-300'>Dec 2021 - June 2025</p>
            </div>
            <ul className='md:px-10 list-disc space-y-4 ml-5 text-lg flex flex-col items-start'>
                {details?.points?.map((point, ind) => (
                    <li key={ind}>{point}</li>
                ))}
            </ul>
        </article>
    );
};
export default EducationCard;