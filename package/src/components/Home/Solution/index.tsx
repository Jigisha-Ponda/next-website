import Link from "next/link";
import { Icon } from "@iconify/react";
import Image from "next/image";

const Solution = () => {
  return (
    <section className="dark:bg-darkmode overflow-x-hidden py-14">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
        <div className="bg-heroBg dark:bg-midnight_text rounded-3xl lg:px-16 px-4 py-12">
          <div className="grid lg:grid-cols-2 items-center gap-12">
            <div>
              <h2 className="md:text-35 sm:text-28 text-24 font-semibold text-midnight_text dark:text-white">
                Need a
                <span className="text-primary max-w-max ml-1 mr-1"> tech team </span>
                you can rely on?
              </h2>
              <p className="mt-6 text-base text-muted dark:text-white dark:text-opacity-70 lg:max-w-full sm:max-w-75%">
                We bring your ideas to life with scalable, high-performance digital solutions. Let’s create something extraordinary.
              </p>
              <Link
                href="/contact"
                className="lg:text-17 flex gap-4 w-fit items-center bg-primary text-white py-2 px-4 lg:py-3 lg:px-8 rounded-lg mt-12 border border-primary hover:text-primary hover:bg-transparent"
              >
                Get Started
                <Icon
                  icon="solar:alt-arrow-right-linear"
                  width="13"
                  height="13"
                />
              </Link>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/image/tech-team.avif"
                alt="image"
                width={531}
                height={200}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
