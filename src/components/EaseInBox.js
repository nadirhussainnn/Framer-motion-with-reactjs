import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

export default function EaseInBox() {
    
  
    return (
    <motion.div animate={{ x: 100 }}  transition={{ type: "spring", stiffness: 100 }} >
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
