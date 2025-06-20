import React from "react";
import { Metadata } from "next";
import Hero from "@/components/Home/Hero";
import Payment from "@/components/Home/Payment";
import Spend from "@/components/Home/Spend";
import Method from "@/components/Home/Method";
import Mobile from "@/components/Home/Mobile";
import Search from "@/components/Home/Search";
// import Pricing from "@/components/Home/Pricing";
import Solution from "@/components/Home/Solution";
import WebSolutions from "@/components/Home/WebSolutions";

export const metadata: Metadata = {
  title: "Nicktio",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Payment />
      <WebSolutions />
      <Spend />
      <Method />
      <Mobile />
      {/* <Search /> */}
      {/* <Pricing /> */}
      {/* <Solution /> */}
      
    </main>
  );
}
