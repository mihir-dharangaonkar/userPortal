import React from "react"
import { mount } from "enzyme"
import LoginPage from "./LoginPage.js"
import { SearchBox } from "./DataTable"
import Buttons from "../BasicComponents/Buttons"
import { Checkbox } from "semantic-ui-react"
import { render, screen, fireEvent, act } from "@testing-library/react"
import { wait, waitFor } from "@testing-library/dom"

describe("Login Page tests", () => {
  it("should render 2 serachbox component ", () => {
    const LoginPageTest = mount(<LoginPage />)
    expect(LoginPageTest.find("input")).toHaveLength(3)
  })
  it("should render a button with text Submit", () => {
    const Wrapper = mount(<LoginPage />)
    expect(Wrapper.find(Buttons).text()).toEqual("Submit")
  })
  it("should have label UserName for first and Password for second input", () => {
    const Wrapper = mount(<LoginPage />)
    expect(
      Wrapper.find("label")
        .first()
        .text()
    ).toEqual("UserName")
    expect(
      Wrapper.find("label")
        .at(1)
        .text()
    ).toEqual("Password")
  })
  it("Should have a checkbox with label I Agree for all terms and conditions", () => {
    const Wrapper = mount(<LoginPage />)
    expect(Wrapper.find("Checkbox").text()).toEqual(
      "I Agree for all terms and conditions"
    )
  })

  it("should render the label in black color", () => {
    const Wrapper = mount(<LoginPage />)
    expect(
      Wrapper.find("label")
        .at(0)
        .prop("style")
    ).toHaveProperty("color", "black")
    expect(
      Wrapper.find("label")
        .at(0)
        .prop("style")
    ).toHaveProperty("fontWeight", "bold")
  })
  it("should have Checkbox rendered ", () => {
    render(<LoginPage />)
    expect(
      screen.getByLabelText("I Agree for all terms and conditions")
    ).toBeInTheDocument()
  })
})
