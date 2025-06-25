"use client";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { missionVisionValues } from "@/app/api/data";
import Image from "next/image";

const MissionVisionValues = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  const TopAnimation = {
    initial: { y: "-100%", opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: "-100%", opacity: 0 },
    transition: { duration: 1, delay: 0.4 },
  };

  const bottomAnimation = (index: any) => ({
    initial: { y: "100%", opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 },
    transition: { duration: 1, delay: 0.4 + index * 0.4 },
  });



  return (
    <section className="dark:bg-darkmode py-14">
      <div
        ref={ref}
        className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4"
      >
        <motion.div>
          <div className="px-4 lg:px-12">
            <h2 className="text-center font-semibold md:text-35 sm:text-28 text-24 mb-8 text-midnight_text dark:text-white lg:mx-44">
              Our
              <span className="text-primary"> Mission & Vision</span>
            </h2>
          </div>
        </motion.div>

        <div className="flex justify-start sm:mt-20 mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-14 gap-8">
            {missionVisionValues.map((item, index) => (
              <div key={index}>
                <motion.div>
                  <div className="rounded-full">
                    <Image
                      src={item.image}
                      alt={`Brand: ${item.title}`}
                      width={80}
                      height={80}
                      className="rounded-full bg-white p-4 shadow-lg dark:bg-midnight_text"
                    />
                  </div>
                  <div className="py-4">
                    <p className="lg:text-25 text-22 font-medium text-midnight_text dark:text-white">
                      {item.title}
                    </p>
                  </div>
                  <div className="mr-2">
                    <p className="text-base text-muted dark:text-white dark:text-opacity-70">
                      {item.details}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionValues;
