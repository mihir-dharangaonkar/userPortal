import React from "react"
import { Checkbox, Form } from "semantic-ui-react"
import styled from "styled-components"
import Buttons from "../BasicComponents/Buttons.js"
import { useFormik } from "formik"
import { toast } from "react-toastify"
import Header from "../BasicComponents/Header"

import manWithDocument from "../Icons/man_with_documents.svg"

export const SearchBox = styled.input`
  border: none;
  border-bottom: 5px solid #4c7700;
  width: 60%;
  height: 50px;
  margin: 30px;
  margin-left: 230px;
`
const Background = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${manWithDocument});
  background-repeat: no-repeat;
`
const Container = styled.div`
  display: block;
  height: 600px;
  width: 600px;
  margin: auto;
` /*
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`*/ /* Center and scale the image nicely */
/*const LoginContainer = styled.div`
  background-image: url(${backIcon});
  height: 1000px;
  width: auto;
  */ const LoginPage = ({
  history
}) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      checkbox: ""
    },

    onSubmit: (values) => {
      if (values.email === "tristar.mihir@gmail.com") {
        history.push("/LandingPage")
      } else {
        toast.error("Wrong email or password", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        })
      }
    }
  })

  return (
    <>
      <Header header="Portfolio form site" path={manWithDocument} />
      <Background>
        <Container>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Field>
              <label style={{ color: "black", fontWeight: "bold" }}>UserName</label>
              <SearchBox
                type="email"
                name="email"
                placeholder="Email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </Form.Field>
            <Form.Field>
              <label style={{ color: "black", fontWeight: "bold" }}>Password</label>
              <SearchBox
                type="password"
                name="password"
                placeholder="Password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
            </Form.Field>
            <Form.Field>
              <Checkbox
                name="checkbox"
                label=" I Agree for all terms and conditions"
                onClick={formik.handleChange}
              />
            </Form.Field>
            <Buttons text="Submit" />
          </Form>
        </Container>
      </Background>
    </>
  )
}

export default LoginPage
