import React from "react"
import styled from "styled-components"
const Divider = styled.div`
  width: 100%;
  border-bottom: 1px solid gray;
  margin: 5px;
`
const Footer = (props) => {
  return (
    <>
      {props.true ? <Divider /> : null}
      <footer>
        <p>
          <b>{props.text1}</b>
        </p>
        <br />
        <p>
          <b>{props.text2}</b>
        </p>
      </footer>
    </>
  )
}
export default Footer
