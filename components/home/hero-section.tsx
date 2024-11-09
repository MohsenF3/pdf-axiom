"use client";

import {
  slideInTextVariants,
  staggerContainerVariants,
} from "@/lib/animations";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { buttonVariants } from "../ui/button";
import { ContainerScroll } from "../ui/container-scroll-animation";
import { IconArrowRight } from "../ui/icons";
import MagneticButton from "../ui/magnetic-button";
import { Spotlight } from "../ui/spot-light";

export default function HeroSection() {
  return (
    <div className="relative flex h-auto w-full overflow-hidden pb-16 pt-20 md:items-center md:justify-center">
      <Spotlight
        className="-left-16 -top-20 md:-top-40 md:left-12"
        fill="white"
      />

      <ContainerScroll titleComponent={<ContainerScrollTitle />}>
        <Image
          src={`/example-dashboard.webp`}
          alt="hero image"
          height={720}
          width={1400}
          className="mx-auto h-full rounded-2xl object-cover object-left-top"
          draggable={false}
          priority
        />
      </ContainerScroll>
    </div>
  );
}

function ContainerScrollTitle() {
  return (
    <motion.div
      className="relative z-10 mx-auto w-full max-w-4xl space-y-5 p-4 pt-28 text-center md:pt-0"
      variants={staggerContainerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.h1
        className="bg-gradient-to-b from-foreground/90 to-foreground/60 bg-clip-text text-center text-4xl font-bold !leading-[1.2] text-transparent sm:text-5xl md:bg-gradient-to-r xl:text-7xl"
        variants={slideInTextVariants}
      >
        Transform PDFs into Quick Answers with AI
      </motion.h1>
      <motion.p
        className="mx-auto max-w-md text-center text-foreground/80 sm:max-w-lg"
        variants={slideInTextVariants}
      >
        No more sifting through pages. Upload your PDF and get instant,
        AI-driven answers, summaries, and insights to boost your learning and
        productivity. copy.
      </motion.p>

      <MagneticButton>
        <motion.button
          className={cn(
            buttonVariants({ variant: "default" }),
            "group font-medium tracking-wider duration-0",
          )}
          variants={slideInTextVariants}
        >
          Start for free
          <IconArrowRight className="transition-all group-hover:translate-x-1" />
        </motion.button>
      </MagneticButton>
    </motion.div>
  );
}
