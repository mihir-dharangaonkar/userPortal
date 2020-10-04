import React from "react"
import Footer from "../BasicComponents/Footer.js"

describe("Footer", () => {
  it("should rnder the Footer when props are provided", () => {
    const props = {
      true: true,
      text1: "Hi",
      text2: "Mihir"
    }
    const wrapper = mount(<Footer {...props} />)
    expect(wrapper.find("p")).toHaveLength(2)
    expect(
      wrapper
        .find("p")
        .first()
        .text()
    ).toBe("Hi")
  })
})
