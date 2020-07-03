import React from "react"
import PropsTypes from "prop-types"
import styled from "styled-components"
import Icons from "../BasicComponents/Icons.js"

const Button = styled.button`
color: white;
background-color:${(props) => (props.primary ? "red" : "#351973")};
width: ${(props) => (props.width ? `${"width"}` : "40%")};
height:50px;
cursor:pointer;
font-weight:bold;

border : ${(props) => (props.noBorder ? "none" : "1px solid")}
:hover
{
background-color:#351973}
`
const Buttons = ({ ...props }) => {
  return (
    <>
      <Button>
        {props.text}
        {props.width}
        <Icons />
      </Button>
    </>
  )
}

Buttons.propsTypes = {
  text: PropsTypes.String,
  color: PropsTypes.String
}

Buttons.defaultProps = {
  text: "No Text here"
}

export default Buttons
