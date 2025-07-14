// import React from "react";
// import HeroSub from "@/components/SharedComponents/HeroSub";
// import { Metadata } from "next";
// import PortfolioList from "@/components/Portfolio/PortfolioList";
// import PortfolioSection from "@/components/Portfolio/PortfolioSection";
// export const metadata: Metadata = {
//   title: "Portfolio | Emphasis Soft",
// };

// const page = () => {
//   const breadcrumbLinks = [
//     { href: "/", text: "Home" },
//     { href: "/portfolio", text: "Portfolio" },
//   ];
//   return (
//     <>
//       <HeroSub
//         title="Portfolio"
//         description="Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing Variou"
//         breadcrumbLinks={breadcrumbLinks}
//       />
//       <PortfolioSection/>
//       <PortfolioList/>
//     </>
//   );
// };

// export default page;


import HeroSub from "@/components/SharedComponents/HeroSub";
import { Metadata } from "next";
import { getAllPortfolios } from "@/utils/portfolioMarkdown";
import PortfolioSection from "@/components/Portfolio/PortfolioSection";

export const metadata: Metadata = {
  title: "Portfolio | Emphasis Soft",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/portfolio", text: "Portfolio" },
  ];

  const portfolios = getAllPortfolios([
    "title",
    "date",
    "type", // IMPORTANT: Make sure this field exists to distinguish tabs
    "excerpt",
    "coverImage",
    "slug",
  ]);

  return (
    <>
      <HeroSub
        title="Portfolio"
        description="Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing Variou"
        breadcrumbLinks={breadcrumbLinks}
      />
      <PortfolioSection portfolios={portfolios} />
    </>
  );
};

export default page;
