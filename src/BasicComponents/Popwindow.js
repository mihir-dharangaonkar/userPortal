import React from "react"
import { Button, Modal } from "semantic-ui-react"
import Select from "../BasicComponents/Select.js"
import RadioButton from "../BasicComponents/RadioButton.js"

const Popupwindow = () => {
  const Labels = ["Yes", "No"]

  return (
    <>
      <Modal trigger={<Button secondary>Add Taxation Country</Button>}>
        <Modal.Header>Select one country</Modal.Header>
        <Modal.Content>
          <Select />
          <Button secondary style={{ margin: "60px" }}>
            Add
          </Button>
          <p> {`Do you have TIN with you?`} </p>
          <RadioButton options={Labels} />
        </Modal.Content>
      </Modal>
    </>
  )
}

export default Popupwindow
