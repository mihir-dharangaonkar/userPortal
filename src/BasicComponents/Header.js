import React from "react"
import styled from "styled-components"
import ImageView from "../BasicComponents/ImageView.js"
import PropTypes from "prop-types"

const Banner = styled.div`
  display: flex;
  border: 6px solid #e80a89 to #f15b2a;
  width: 100%;
  background-image: linear-gradient(to right, #e80a89, #f15b2a);
  height: 160px;
  color: white;
  margin-bottom: 40px;
`
const Text = styled.h1`
  margin: 0 auto;
  font-weight: bold;
`

const Header = (Props) => (
  <>
    <Banner>
      <ImageView
        path={Props.path}
        style={{ width: 80, height: 80, color: "white" }}
        handleClick={Props.handleClick}
      />
      <Text>{Props.header}</Text>
    </Banner>
  </>
)

Header.propTypes = {
  path: PropTypes.string,
  handleClick: PropTypes.func,
  header: PropTypes.string
}

Header.defaultProps = {
  header: "sample Header"
}

export default Header
