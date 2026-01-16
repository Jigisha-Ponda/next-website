import ContactForm from "@/components/Contact/Form";
import Expertise from "@/components/Home/Expertise";
import Hero from "@/components/Home/Hero";
import HeroLead from "@/components/Lead/HeroLead";
import HeroSub from "@/components/SharedComponents/HeroSub";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lead | Emphasis Soft",
};

const Lead = () => {
  return (
    <>
      <HeroLead />
      <Expertise />
      <ContactForm />
    </>
  );
};

export default Lead;
