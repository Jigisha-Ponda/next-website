import React from "react";
import HeroSub from "@/components/SharedComponents/HeroSub";
import { Metadata } from "next";
import PortfolioList from "@/components/Portfolio/PortfolioList";
export const metadata: Metadata = {
  title: "Portfolio | Emphasis Soft",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/portfolio", text: "Portfolio" },
  ];
  return (
    <>
      <HeroSub
        title="Portfolio"
        description="Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing Variou"
        breadcrumbLinks={breadcrumbLinks}
      />
      <PortfolioList/>
    </>
  );
};

export default page;
