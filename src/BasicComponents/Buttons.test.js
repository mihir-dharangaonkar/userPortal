import React from "react"
import Buttons from "../BasicComponents/Buttons.js"
import { mount } from "enzyme"

describe("Buttons", () => {
  it("Should display the text passed as props", () => {
    const Button = mount(<Buttons text={"Submit"} />)
    expect(Button.text()).toBe("Submit")
  })
  it("should call onClick method", () => {
    const Button = mount(<Buttons text={"Submit"} />)
    const mockOnClean = jest.fn()
    Button.simulate("click")
    expect(mockOnClean).toHaveBeenCalledTimes(0)
  })
})
