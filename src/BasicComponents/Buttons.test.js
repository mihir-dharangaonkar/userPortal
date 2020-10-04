import React from "react"
import Buttons from "../BasicComponents/Buttons.js"
import { mount } from "enzyme"

describe("Buttons", () => {
  it("Should display the text passed as props", () => {
    const Button = mount(<Buttons text={"Submit"} />)
    expect(Button.text()).toBe("Submit")
  })
  it("should call onClick method", () => {
    const mockOnClick = jest.fn()
    const Button = mount(<Buttons text={"Submit"} onClick={mockOnClick} />)

    Button.simulate("click")
    expect(mockOnClick).toHaveBeenCalledTimes(1)
  })
})
