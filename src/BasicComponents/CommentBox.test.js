import React from "react"
import CommentBox from "../BasicComponents/CommentBox.js"
import { mount } from "enzyme"
import { render, screen, fireEvent, act } from "@testing-library/react"

describe("CommentBox", () => {
  it("should render placeholder as per prop passed", () => {
    const CommentBoxDummy = mount(
      <CommentBox placeholder='Enter the detail here...' />
    )
    expect(CommentBoxDummy.props().placeholder).toEqual("Enter the detail here...")
  })
  it("should call onChange Method ", () => {
    const demoOnChange = jest.fn()
    render(<CommentBox onComment={demoOnChange} />)
    fireEvent.change(screen.getByRole("textbox"), { target: { value: "test" } })
    expect(demoOnChange).toHaveBeenCalledTimes(1)
  })
  it("should have length of 5 rows", () => {
    const CommentBoxDummy = mount(<CommentBox rows={5} />)
    expect(CommentBoxDummy.props().rows).toEqual(5)
  })
})
