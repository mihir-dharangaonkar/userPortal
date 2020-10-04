import React, { useState } from "react"
import styled from "styled-components"
import Header from "../BasicComponents/Header.js"
import {useForm} from "react-hook-form"

const SignupPage = () => {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
  `
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    userName: "",
    password: "",
    confirmPassword: ""
  })

  const handleInput = (e) => {
    return setState({ ...state, [e.target.name]: e.target.value })
  }
 const { handleSubmit, register, errors } = useForm();
 const onSubmit = values => console.log(values);
  return (
    <div>
      <Header header='Sign up' />
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Signup Page</h1>
          <label>First Name</label>
          <input
            name='firstName'
            type='text'
            ref={register({
            required:"Required",
            validate:value=>value ==="mihir" ||"Welcome"
            })}
            onChange={(e) => handleInput(e)}
          />
          {errors.firstName && errors.firstName.message}
          <br />
          <label>Last Name</label>
          <input
            name='lastName'
            type='text'
            value={state.lastName}
            onChange={(e) => handleInput(e)}
          />
          <br />
          <label>email</label>
          <input
            name='email'
            type='email'
            value={state.email}
            onChange={(e) => handleInput(e)}
          />
          <br />
          <label>Phone number</label>
          <input
            name='number'
            type='number'
            value={state.number}
            onChange={(e) => handleInput(e)}
          />
          <br />
          <label>Choose username</label>
          <input
            type='text'
            name='userName'
            value={state.userName}
            onChange={(e) => handleInput(e)}
          />
          <br />
          <label>Password</label>
          <input
            type='password'
            name='password'
            value={state.password}
            onChange={(e) => handleInput(e)}
          />
          <br />
          <label>Confirm Password</label>
          <input
            type='password'
            name='confirmPassword'
            value={state.confirmPassword}
            onChange={(e) => handleInput(e)}
          />
          <br />
          <input type='submit' />
        </form>
      </Container>
    </div>
  )
}
export default SignupPage
