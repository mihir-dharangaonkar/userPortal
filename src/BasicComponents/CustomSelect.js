import React from "react"
import { Form } from "semantic-ui-react"

const CustomSelect = ({ handleChange, ...props }) => {
  return (
    <>
      <Form.Select
        placeholder="Select your country"
        fluid
        value={props.value}
        onChange={handleChange}
        name={props.name}
      />
    </>
  )
}

export default CustomSelect
