import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
export default function ScrollTriggered() {
  //animate on enter and leave

  return (
    <div>
      <motion.ul style={{listStyle:'none'}}>
        {new Array(100).fill().map((element, index) => {
          return (
            <>
              <motion.li>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                >
                  {index % 2 == 0 ? (
                    <Item primary>This is my list item - {index + 1}</Item>
                  ) : (
                    <Item>This is my list item - {index + 1}</Item>
                  )}
                </motion.div>
              </motion.li>
            </>
          );
        })}
      </motion.ul>
    </div>
  );
}

const Item = styled.li`
  border: 1px solid grey;
  overflow-y: auto;
  padding: 10px;
  margin-top: 1px;
  color: ${(props) => (props.primary ? "red" : "blue")};
`;
