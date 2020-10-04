import React from "react"
import { Checkbox, Form } from "semantic-ui-react"
import styled from "styled-components"
import Buttons from "../BasicComponents/Buttons.js"
import { useFormik } from "formik"
import { toast } from "react-toastify"
import Header from "../BasicComponents/Header"
import manWithDocument from "../Icons/bg1.svg"

const Background = styled.div`
  float: right;
  height: 70%;
  width: 70%;
  background-image: url(${manWithDocument});
  background-repeat: no-repeat;
`
const SignUpLink = styled.a`
  color: black;
  text-decoration: underline;
  font-weight: bold;
  margin: 10px;
  display: flex;
  flex-direction: column;
`
const Container = styled.div`
  display: flex;
  height: 600px;
  width: 600px;
  margin: auto;
`
const LoginPage = ({ history }) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      checkbox: ""
    },

    onSubmit: (values) => {
      alert([email.value, password.value])
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
  let email, password

  return (
    <>
      <Header header='Portfolio form site' path={manWithDocument} />
      <Background>
        <Container>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Field>
              <label style={{ color: "black", fontWeight: "bold" }}>UserName</label>
              <input
                id='email'
                ref={(input) => (email = input)}
                type='email'
                name='email'
                placeholder='Email'
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </Form.Field>
            <Form.Field>
              <label style={{ color: "black", fontWeight: "bold" }}>Password</label>
              <input
                id='password'
                ref={(input) => (password = input)}
                type='password'
                name='password'
                placeholder='Password'
                onChange={formik.handleChange}
                value={formik.values.password}
              />
            </Form.Field>

            <Form.Field>
              <Checkbox
                id='checkbox'
                name='checkbox'
                label='I Agree for all terms and conditions'
                onClick={formik.handleChange}
              />
            </Form.Field>
            <Buttons text='Submit' />
            <SignUpLink href='' onClick={() => history.push("/signup")}>
              {" "}
              Not a member? Sign up
            </SignUpLink>
          </Form>
        </Container>
      </Background>
    </>
  )
}

export default LoginPage
