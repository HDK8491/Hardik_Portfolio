import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";
import { NextResponse } from "next/server";
import { Education, Project, Skill } from "@/typings";
const query = groq`
*[_type=='education']{...,}`;

type Data = {
    education: Education[];
};

export async function GET() {
    const education: Education[] = await sanityClient.fetch(query);

    return NextResponse.json(education);
}
