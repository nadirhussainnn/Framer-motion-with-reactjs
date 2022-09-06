import React from 'react'
import styled from 'styled-components';

export default function Box() {
  return (
    <>
        <Div />
    </>
  )
}

const Div = styled.div`
  padding: 4em;
  border: 4px dashed palevioletred;
  border-radius: 3px;
  width:20%;
  display:inline block;
`;