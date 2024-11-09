"use client";

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

// Custom hook to check if the device is mobile
const useIsMobile = (breakpoint = 768): boolean => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= breakpoint);
    checkMobile();

    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [breakpoint]);

  return isMobile;
};

// Container component that handles scroll-based transformations
export const ContainerScroll: React.FC<{
  titleComponent: React.ReactNode;
  children: React.ReactNode;
}> = ({ titleComponent, children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const isMobile = useIsMobile();

  const scaleDimensions = isMobile ? [0.7, 0.9] : [1.05, 1];
  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions);
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="relative flex h-[60rem] items-center justify-center p-2 md:h-[80rem] md:p-20"
      ref={containerRef}
    >
      <div className="relative w-full" style={{ perspective: "1000px" }}>
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

// Header component
const Header: React.FC<{
  translate: MotionValue<number>;
  titleComponent: React.ReactNode;
}> = ({ translate, titleComponent }) => (
  <motion.div
    style={{ translateY: translate }}
    className="mx-auto mb-20 max-w-5xl text-center"
  >
    {titleComponent}
  </motion.div>
);

// Card component
const Card: React.FC<{
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  children: React.ReactNode;
}> = ({ rotate, scale, children }) => (
  <motion.div
    style={{
      rotateX: rotate,
      scale,
      boxShadow:
        "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
    }}
    initial={{ opacity: 0, translateY: 100 }}
    animate={{ opacity: 1, translateY: 0 }}
    transition={{ duration: 0.5, delay: 2.3 }}
    className="mx-auto -mt-12 h-[30rem] w-full max-w-5xl rounded-[30px] border-4 border-muted-foreground bg-muted p-2 shadow-2xl md:h-[40rem] md:p-6"
  >
    <div className="h-full w-full overflow-hidden rounded-2xl bg-popover md:rounded-2xl md:p-4">
      {children}
    </div>
  </motion.div>
);
