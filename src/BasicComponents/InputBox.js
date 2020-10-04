import React from "react"
import { Input } from "semantic-ui-react"

const InputBox = ({ onPress, ...props }) => {
  return (
    <>
      <Input
        type={props.type}
        placeholder={props.placeholder}
        onChange={onPress}
        maxLength='30'
        name={props.name}
      />
    </>
  )
}
export default InputBox
