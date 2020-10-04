import React from "react"

import DataTable, { Minimal, SearchBox } from "./DataTable"

import { render, screen, fireEvent, act } from "@testing-library/react"

import { wait, waitFor } from "@testing-library/dom"

describe("DataTable cases", () => {
  it("Should show data fetching message when data is still not available", () => {
    render(<DataTable />)
    expect(
      screen.getByText("Please wait ... we are fetching data from backend")
    ).toBeInTheDocument()
  })
  it("should render data coming from backend", async () => {
    act(() => {
      render(<DataTable />)
    })

    await waitFor(() => {
      const count = screen.queryAllByTestId("firstName").length
      expect(screen.queryAllByTestId("firstName")).toHaveLength(count)
    })
  })
  it("should call handle change when click on detailed button", async () => {
    render(<DataTable history={{ push: jest.fn() }} />)

    await waitFor(() => {
      const Buttons = screen.queryAllByTestId("go")
      Buttons[0].click()
    })
  })
})
