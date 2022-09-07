import React from "react";
import { motion } from "framer-motion";

export default function TextWriteup() {
  const line1 = "We can then create our variants to tell Framer Motion";
  const line2 =
    "The hidden part (could be titled anything) is the initial state";

  const sentence = {
    hidden: {
      opacity: 1,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };

  const letter = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <motion.h3 variants={sentence} initial="hidden" animate="visible">
      {line1.split("").map((char, index) => {
        return (
          <motion.span key={index} variants={letter}>
            {char}
          </motion.span>
        );
      })}
      <br />
      {line2.split("").map((char, index) => {
        return (
          <motion.span key={index} variants={letter}>
            {char}
          </motion.span>
        );
      })}
    </motion.h3>
  );
}
