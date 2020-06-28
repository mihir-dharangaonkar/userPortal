import React from "react"
import { Message } from "semantic-ui-react"
import { Button } from "semantic-ui-react"
const Success = ({ history }) => (
  <>
    <Message positive>
      <Message.Header>You successfully added yourself to our system</Message.Header>
    </Message>
    <Button
      onClick={() => {
        history.push("./datatable")
      }}
    >
      Go To DataTable
    </Button>
  </>
)

export default Success
