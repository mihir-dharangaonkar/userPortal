import React from "react"
import { Loader } from "semantic-ui-react"
import styled from "styled-components"
import ImageView from "../BasicComponents/ImageView.js"
import logo from "../Icons/2851733471580378372.svg"

const Wrapper = styled.div`
  display: block;
  left-margin: auto;
  right-margin: auto;
`

const Loading = () => {
  return (
    <>
      <Wrapper>
        <ImageView path={logo} style={{ width: 20, height: 20 }} />
        <Loader active size='massive' />
        <h2>Please wait ... we are fetching data from backend </h2>
      </Wrapper>
    </>
  )
}

export default Loading
