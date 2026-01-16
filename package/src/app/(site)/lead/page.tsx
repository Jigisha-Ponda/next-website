import ContactForm from "@/components/Contact/Form";
import Expertise from "@/components/Home/Expertise";
import HeroLead from "@/components/Lead/HeroLead";
import OurServices from "@/components/Lead/OurServices";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lead | Emphasis Soft",
};

const Lead = () => {
  return (
    <>
      <HeroLead />
      <OurServices/>
      <Expertise />
      <ContactForm />
    </>
  );
};

export default Lead;
