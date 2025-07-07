"use client";
import React, { FC, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Icon } from "@iconify/react";

const Details: FC = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  const TopAnimation = {
    initial: { y: "-100%", opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: "-100%", opacity: 0 },
    transition: { duration: 1, delay: 0.4 },
  };

  const bottomAnimation = {
    initial: { y: "100%", opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 },
    transition: { duration: 1, delay: 0.4 },
  };

  const [isModalOpen, setIsVideoOpen] = useState<boolean>(false);

  const openModal = (): void => {
    setIsVideoOpen(true);
  };

  const closeModal = (): void => {
    setIsVideoOpen(false);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);
  return (
    <section className="dark:bg-darkmode overflow-hidden py-14">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
        <div ref={ref}>
          <motion.div className="text-center">
            <h2 className="md:text-35 sm:text-28 text-24 text-midnight_text font-semibold mb-5 dark:text-white">
              Empowering Innovation Through
              <span className="text-primary ml-2">Technology</span>
            </h2>
            <p className="text-17 text-muted dark:text-white dark:text-opacity-70 lg:font-medium mx-1 lg:mx-64 mb-3">
              At EmphasisSoft, we specialize in crafting cutting-edge software solutions that drive growth and deliver measurable results. Whether you're a startup or an enterprise, we bring innovation, agility, and reliability to every line of code we write.
            </p>
          </motion.div>
          <motion.div className="flex justify-center items-center">
            <div className="relative overflow-hidden mt-14">
              <Image
                src="/images/image/team-work.avif"
                alt="image"
                width={550}
                height={350}
                className="rounded-lg w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Details;
