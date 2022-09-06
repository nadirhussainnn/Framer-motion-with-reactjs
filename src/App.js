import React from "react";
import Box from "./components/Box";
import { motion } from "framer-motion";
import Circle from "./components/Circle";
import List from "./components/List";
import ScrollTriggered from "./components/ScrollTriggered";

export default function App() {
  return (
    <>
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
