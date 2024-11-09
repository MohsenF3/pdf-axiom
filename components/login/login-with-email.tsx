"use client";

import { motion, useAnimation } from "framer-motion";
import { Button } from "../ui/button";

export default function LoginWithEmail() {
  const controls = useAnimation();

  const handleButtonClick = () => {
    controls.start({ opacity: 1, height: "40px", marginBottom: "10px" });
  };

  return (
    <>
      <motion.input
        type="email"
        placeholder="contact@aceternity.com"
        initial={{ opacity: 0, height: 0 }}
        animate={controls}
        transition={{ duration: 0.3 }}
        className="h-10 w-full rounded-md border border-muted bg-transparent pl-4 text-sm placeholder-muted-foreground outline-none focus:outline-none focus:ring-2 focus:ring-muted active:outline-none"
      />

      <Button
        variant="secondary"
        className="w-full px-4 py-3 font-medium hover:bg-muted/60"
        onClick={handleButtonClick}
      >
        Continue with Email
      </Button>
    </>
  );
}
