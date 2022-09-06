import React from "react";
import styled from "styled-components";
import {motion} from 'framer-motion'

export default function List() {
    
    const list = { hidden: { opacity: 0 } }
    const item = { hidden: { x: -10, opacity: 0 } }

  return (
    <>
    <motion.ul animate="hidden" variants={list}>
      {new Array(5).fill().map((it, index) => {
        return (
          <motion.li variants={item}>
            <Item>
                <span>Text -{index}</span>
            </Item>
          </motion.li>
        );
      })}
      </motion.ul>
    </>
  );
}

const Item = styled.div`
  width: 20%;
  padding: 1em;
  border: 2px solid blue;
  margin-top:1px;
`;
