import React from "react"
import InputBox from "../BasicComponents/InputBox.js"
import { mount } from "enzyme"

describe("InputBox", () => {
  it("Should call onPress method when user input text", () => {
    const mockOnPress = jest.fn()
    const Input = mount(<InputBox onPress={mockOnPress} />)

    Input.find("input").simulate("change", { target: { value: "Mihir" } })
    expect(mockOnPress).toHaveBeenCalledTimes(1)
  })
  it("it should have max length of 30", () => {
    const Input = mount(<InputBox />)
    expect(Input.find("input").prop("maxLength")).toEqual("30")
    Input.setProps({ placeholder: "text" })
    expect("placeholder" in Input.props()).toEqual(true)
  })
})
