import React from "react"
import { getByText, render, screen } from "@testing-library/react"
import CustomSelect from "./CustomSelect"
import userEvent from "@testing-library/user-event"

describe("Custom select test cases", () => {
  const demoOptions = [
    { value: "Singapore", label: "Singapore" },
    { value: "Aland Islands", label: "Aland Islands" },
    { value: "Albania", label: "Albania" },
    { value: "Algeria", label: "Algeria" },
    { value: "American Samoa", text: "American Samoa" }
  ]
  it("should call onChange when user select a option", () => {
    const mockHandleChange = jest.fn()

    const Select = mount(
      <CustomSelect
        placeholder={"Select your country"}
        options={demoOptions}
        handleChange={mockHandleChange}
      />
    )
    Select.simulate("change", { target: { value: "Singapore" } })

    expect(mockHandleChange).toHaveBeenCalledTimes(0)
  })
})
