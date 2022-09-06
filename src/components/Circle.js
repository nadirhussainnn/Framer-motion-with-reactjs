import React from 'react'
import styled from 'styled-components'

export default function Circle() {
  return (
    <Circ />
  )
}

const Circ=styled.div`

    padding:8em;
    border-radius:50%;
    border:4px solid red;
    width:20%;
    box-sizing: border-box;
`