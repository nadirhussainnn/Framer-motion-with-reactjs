import React from "react";
import Box from "./components/Box";
import { motion } from "framer-motion";
import Circle from "./components/Circle";
import List from "./components/List";
import ScrollTriggered from "./components/ScrollTriggered";
import TextWriteup from "./components/TextWriteup";
import WavyText from "./components/WavyText";
import EaseInBox from "./components/EaseInBox";
import EaseOutBox from "./components/EaseOutBox";

export default function App() {
  return (
    <>
      <TextWriteup />
      <WavyText />

    {/* Ease In */}

    <EaseInBox />
    <EaseOutBox/>
      {/* animate */}
      <motion.div animate={{ x: 100, y: 50 }}>
        <Box />
      </motion.div>

      {/* advanced animate */}
      <motion.div
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
      >
        <Box />
      </motion.div>

      {/* drag, hover, tap etc */}
      <motion.div
      // whileHover={{scale:1.1}}
      >
        <Circle />
      </motion.div>

      {/* Variants */}
      <List />

      {/* Scroll Triggered */}
      <ScrollTriggered />
    </>
  );
}
