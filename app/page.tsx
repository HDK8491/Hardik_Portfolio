import About from "@/components/About";
import ContactMe from "@/components/ContectMe";
import Education from "@/components/Eduction";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Project";

import Skills from "@/components/Skills";
import { fetchEducation } from "@/utils/fetchEducations";
import { fetchPageInfo } from "@/utils/fetchPageInfo";
import { fetchProjects } from "@/utils/fetchProjects";
import { fetchSkillSet } from "@/utils/fetchSkillSet";
import { fetchSocials } from "@/utils/fetchSocials";
import { log } from "console";
import Link from "next/link";
export const revalidate = 0;
export default async function Home() {
  const pageInfo = await fetchPageInfo();
  const socials = await fetchSocials();
  const education = await fetchEducation();
  const skillsSet = await fetchSkillSet();
  const projects = await fetchProjects();

  return (
    <main className="h-screen bg-[rgb(36,36,36)] text-white snap-y snap-mandatory overflow-scroll z-0 scroll-smooth overflow-x-hidden scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7AB0A]/80 ">
      <Header socials={socials} />
      {/* <h4>Hi there</h4> */}
      <section id="hero" className="snap-center">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      <section id="education" className="snap-center">
        <Education education={education} />
      </section>

      <section id="skills" className="snap-start">
        <Skills skillsSet={skillsSet} />
      </section>

      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
      <Link href={"#hero"}>
        <footer className="sticky bottom-5 left-[50%] flex items-center justify-center mx-auto w-full cursor-pointer">
          <div
            title="Go To Top"
            className=" flex items-center justify-center h-6 w-6 bg-orange-500 rounded-full grayscale hover:grayscale-0"
          />
        </footer>
      </Link>
    </main>
  );
}
