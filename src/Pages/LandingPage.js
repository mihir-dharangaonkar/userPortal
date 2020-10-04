import React from "react"
import styled from "styled-components"
import Header from "../BasicComponents/Header.js"

import ImageView from "../BasicComponents/ImageView.js"

import HeaderNameContext from "../Contexts/HeaderNameContext.js"
import FooterContext from "../Contexts/FooterContext"
import Book from "../Icons/Books.svg"
import Boy from "../Icons/Boy.svg"
import Footer from "../BasicComponents/Footer"

const Card = styled.div`
  width: 500px;
  height: 300px;
  border: 2px solid white;
  border-radius: 10px 20px 30px 40px;
  margin: 30px;
  padding: 70px;
  padding-bottom: 25px;
  cursor: pointer;
  overflow: auto;
`
const Container = styled.div`
  display: flex;
  flex-direction: row;
`
const LandingPage = ({ history }) => {
  const Actions = [
    { key: "/registration", value: "Registration Page" },
    { key: "/datatable", value: "Data Table" }
  ]

  const handleClick = (id) => {
    history.push(`${id}`)
  }
  const Text = React.useContext(HeaderNameContext)
  const Label = React.useContext(FooterContext)

  return (
    <>
      <Header header={Text.Text} />
      <h1>what you want to do?</h1>
      <Container>
        {Actions.map((action) => (
          <Card key={action.key} onClick={(e) => handleClick(action.key)}>
            <ImageView
              path={action.value === "Registration Page" ? Boy : Book}
              alt={"user"}
            />
            <h6>{action.value}</h6>
          </Card>
        ))}
      </Container>
      <Footer {...Label} />
    </>
  )
}

export default LandingPage
