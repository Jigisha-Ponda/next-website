import React from "react";
import { Metadata } from "next";
import Hero from "@/components/Home/Hero";
import Spend from "@/components/Home/Spend";
import Method from "@/components/Home/Method";
import Mobile from "@/components/Home/Mobile";
import Search from "@/components/Home/Search";
// import Pricing from "@/components/Home/Pricing";
import Solution from "@/components/Home/Solution";
import WebSolutions from "@/components/Home/WebSolutions";
import Expertise from "@/components/Home/Expertise";

export const metadata: Metadata = {
  title: "Emphasis Soft",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Expertise />
      <WebSolutions />
      <Spend />
      <Method />
      {/* <Mobile /> */}
      {/* <Search /> */}
      {/* <Pricing /> */}
      {/* <Solution /> */}

    </main>
  );
}
