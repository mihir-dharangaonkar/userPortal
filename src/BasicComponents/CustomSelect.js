import React from "react"
import { Form } from "semantic-ui-react"

const CustomSelect = ({ handleChange, options, ...props }) => {
  return (
    <>
      <Form.Select
        placeholder='Select your country'
        fluid
        value={props.value}
        onChange={handleChange}
        name={props.name}
        options={options}
      />
    </>
  )
}

export default CustomSelect
