import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

export default function EaseOutBox() {
    
    let width=window.innerWidth
  
    return (
    <motion.div animate={{ x: width+10 }}  transition={{ type: "spring", stiffness: 100, delay:2 }} >
      <Box />
    </motion.div>
  );
}

const Box = styled.div`
  padding: 10px;
  min-width: 100px;
  max-width: 100px;
  border: 2px solid gray;
`;
