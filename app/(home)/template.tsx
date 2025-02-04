"use client";

import { motion } from "framer-motion";
import { ReactLenis } from "lenis/react";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    // <ReactLenis root>
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ ease: "easeInOut", duration: 0.5 }}
    >
      {children}
    </motion.div>
    // </ReactLenis>
  );
}
