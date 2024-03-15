"use client";
import { motion } from "framer-motion";
import { SkillSet } from "@/typings";
import Skill from "./Skill";

type Props = {
    skillsSet: SkillSet[] | null;
};

const Skills = ({ skillsSet }: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.75 }}
            className='flex flex-col relative overflow-hidden text-left md:flex-row max-w-full  justify-evenly mx-auto items-center h-screen px-6 md:px-10 py-5'
        >
            <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Skills
            </h3>
            <h3 className='absolute top-32 uppercase tracking-[3px] text-gray-500 text-[.5rem] md:text-sm'>
                Hover over a skill for current proficiency
            </h3>
            <div className='mt-28 md:mt-32 w-full md:my-28 flex space-x-5 overflow-x-scroll md:py-10 md:pt-20 lg:pt-32 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7AB0A]/80 pb-8'>
                {/* {skillsSet &&
                    skillsSet.map((skillSet) => ( */}
                <div className='flex flex-col mx-auto rounded-lg  flex-wrap w-[90%] md:w-[75%] items-center space-y-7 mt-10 flex-shrink-0  bg-[#363636] p-2 md:p-10 opacity-60 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden pb-4 snap-center '>
                    <div className='flex flex-wrap items-center gap-4 p-2 md:p-4 pb-10'>
                        {skillsSet &&
                            skillsSet.map((skillset) =>
                                skillset.skills.map((skill) => (
                                    <Skill key={skill._id} skill={skill} />
                                ))
                            )}
                        {/* {skillSet &&
                                    skillSet?.skills.map((skill) => (
                                        <Skill key={skill._id} skill={skill} />
                                    ))} */}
                    </div>
                </div>
                {/* } */}
            </div>
        </motion.div>
    );
};
export default Skills;