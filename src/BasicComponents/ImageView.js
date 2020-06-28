import React from "react"
import styled from "styled-components"
import { Image } from "semantic-ui-react"
import PropTypes from "prop-types"

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`

const ImageView = (props, width, height, onClick, color) => {
  return (
    <Wrapper>
      <Image
        src={props.path}
        alt="Logo"
        style={{ width: { width }, height: { height }, color: { color } }}
        onClick={props.handleClick}
      />
    </Wrapper>
  )
}

ImageView.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  onClick: PropTypes.func
}

export default ImageView
