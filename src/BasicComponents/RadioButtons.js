import React from "react"
import styled from "styled-components"
import { Form } from "semantic-ui-react"

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  border: none;
  width: 50%;
  height: 25px;
  padding: 10px;
`

const RadioButton = ({ options, handleChange, ...props }) => {
  return (
    <div>
      {options.map((option) => (
        <Wrapper key={option.key}>
          <Form.Radio
            type='radio'
            name={props.name}
            label={option.Label}
            value={option.value}
            onChange={handleChange}
          />
        </Wrapper>
      ))}
    </div>
  )
}

export default RadioButton
