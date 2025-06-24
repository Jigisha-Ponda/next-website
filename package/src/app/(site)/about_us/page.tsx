import React from "react";
import BlogList from "@/components/Blog/BlogList";
import HeroSub from "@/components/SharedComponents/HeroSub";
import { Metadata } from "next";
import Details from "@/components/AboutUs/Details";
import MissionVisionValues from "@/components/AboutUs/Expertise";
import Solution from "@/components/Home/Solution";
import WhatWeDo from "@/components/AboutUs/WhatWeDo";
export const metadata: Metadata = {
    title: "Blog | Nicktio",
};

const Page = () => {
    const breadcrumbLinks = [
        { href: "/", text: "Home" },
        { href: "/about_us", text: "About Us" },
    ];
    return (
        <>
            <HeroSub
                title="About Us"
                description=""
                breadcrumbLinks={breadcrumbLinks}
            />
            {/* <BlogList /> */}
            <Details />
            <MissionVisionValues />
            <WhatWeDo />
            <Solution />
        </>
    );
};

export default Page;
