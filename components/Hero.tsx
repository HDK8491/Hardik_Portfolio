"use client";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircle";
import Image from "next/image";
import Link from "next/link";
import { fetchPageInfo } from "@/utils/fetchPageInfo";
import { PageInfo } from "@/typings";
import { userInfo } from "os";
import { urlFor } from "@/sanity";
type Props = {
  pageInfo: PageInfo | null;
  
};
const Hero = ({ pageInfo }: Props) => {
  const [text, count] = useTypewriter({
    words: [
      `Hi,The Name's ${pageInfo && pageInfo.name}`,
      "FullStackDeveloper.tsx",
      "<LovesToCodeMore/>",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <div className=" relative h-32 w-32  rounded-full overflow-hidden">
      {pageInfo && pageInfo.profilePic && (
        <Image
          src={urlFor(pageInfo?.profilePic)?.url() || "/img2.jpg"}
          fill
          alt="hardik bhammar GECGN"
          className="scale-100 mx-auto bg-cover"
        />)}


                          </div> 
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-600 pb-2 tracking-[15px]">
          {pageInfo?.role}
        </h2>

        <h1 className="text-3xl lg:text-4xl font-semibold mx-auto w-[88%]">
          <span className="mr-3 text-center">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5 z-40 pl-2">
          <Link href={"#about"}>
            <button className="px-4 py-2 border border-[#242424] rounded-full uppercase text-[12px] tracking-widest text-gray-500 transition-all hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40">
              About
            </button>
          </Link>

          <Link href={"#education"}>
            <button className="px-4 py-2 border border-[#242424] rounded-full uppercase text-[12px] tracking-widest text-gray-500 transition-all hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40">
              Education
            </button>
          </Link>

          <Link href={"#skills"}>
            <button className="px-4 py-2 border border-[#242424] rounded-full uppercase text-[12px] tracking-widest text-gray-500 transition-all hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40">
              Skills
            </button>
          </Link>
          <Link href={"#projects"}>
            <button className="px-4 py-2 border border-[#242424] rounded-full uppercase text-[12px] tracking-widest text-gray-500 transition-all hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40">
              Projects
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
