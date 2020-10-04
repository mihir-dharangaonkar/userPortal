import React from "react"
import { Form, TextArea } from "semantic-ui-react"
import { TOTAL_LENGTH } from "../Constants/URI.js"

const CommentBox = ({ onComment, ...props }) => {
  return (
    <>
      <Form>
        <TextArea
          rows={5}
          placeholder='Enter the detail here...'
          onChange={onComment}
          maxLength={TOTAL_LENGTH}
          name={props.name}
        />
      </Form>
    </>
  )
}

export default CommentBox
