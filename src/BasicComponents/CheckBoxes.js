import React from "react"
import { Form, Checkbox } from "semantic-ui-react"
import PropsTypes from "prop-types"

const CheckBoxes = ({ handleChange, LabelName }) => {
  return (
    <>
      {LabelName.map((labels) => (
        <Form key={labels.value}>
          <Checkbox label={labels.Label} onChange={handleChange} />
        </Form>
      ))}
    </>
  )
}
CheckBoxes.propsTypes = {
  LabelName: PropsTypes.Array
}
export default CheckBoxes
