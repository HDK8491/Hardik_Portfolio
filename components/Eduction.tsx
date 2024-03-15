"use client";

import { Education } from "@/typings";
import EducationCard from "./EducationCard";

type Props = {
    education: Education[] | null;
};

const Education = ({ education }: Props) => {
    return (
        <div className='flex flex-col relative  text-left md:flex-row max-w-full  justify-evenly mx-auto items-center h-screen px-6 md:px-10 py-5'>
            <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Education
            </h3>
            <div className='mt-24 my-28 md:mt-32 w-full flex space-x-5 overflow-x-scroll md:py-10 md:pt-20 lg:pt-32 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7AB0A]/80 '>
                {education &&
                    education.map((ed) => (
                        <EducationCard key={ed._id} details={ed} />
                    ))}
                {/* <EducationCard /> */}
            </div>
        </div>
    );
};
export default Education;