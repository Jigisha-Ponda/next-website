import HeroSub from "@/components/SharedComponents/HeroSub";
import Benefit from "@/components/Home/WebSolutions";
import Spend from "@/components/Home/Spend";
import { Metadata } from "next";
import Expertise from "@/components/Home/Expertise";
export const metadata: Metadata = {
  title: "Services | Emphasis Soft",
};

const Services = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/services", text: "Services" },
  ];
  return (
    <>
      <HeroSub
        title="Services"
        description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive understanding of the latest trends."
        breadcrumbLinks={breadcrumbLinks}
      />
      <Expertise />
      <Benefit />
      <Spend />
    </>
  );
};

export default Services;
