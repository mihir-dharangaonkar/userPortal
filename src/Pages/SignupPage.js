import React, { useState } from "react"
import styled from "styled-components"
import Header from "../BasicComponents/Header.js"
import { useForm } from "react-hook-form"
import { Table } from "semantic-ui-react"
import LoginPageCSS from "../CSS/LoginPageCSS.css"

const SignupPage = () => {
  const Container = styled.div`
    display: block;

    width: 100%;
  `

  const Para = styled.span`
    &:before {
      content: " ❌ ";
    }
    color: red;
  `
 

 
  const { handleSubmit, watch, register, errors } = useForm()
  const onSubmit = (values) => alert(JSON.stringify(values))
  const watchLastName=watch(["lastName"])
  return (
    <div>
      <Header header='Sign up' />
      <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
              <h1>Signup Page</h1>
        <Table singleLine>
        
          <Table.Header>

            <Table.Row>
              <Table.HeaderCell>Field</Table.HeaderCell>
              <Table.HeaderCell>Value</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
 
          <Table.Body>
             
              <Table.Row>
                <Table.Cell>
                  {" "}
                  <label>First Name</label>
                </Table.Cell>
                <Table.Cell>
                  {" "}
                  <input
                    name='firstName'
                    type='text'
                    ref={register({ required: "Required" })}
                  />
                  {errors.firstName && <Para>This is required</Para>}
                  {watchLastName==='Dharangaonkar' ?'Good':null}
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>
                  {" "}
                  <label>Last Name</label>
                </Table.Cell>
                <Table.Cell>
                  {" "}
                  <input name='lastName' ref={register({ required: "Required" })} />
                  {errors.lastName && <Para>This is required</Para>}
                </Table.Cell>
              </Table.Row>
               <Table.Row><button type='submit'>Submit</button></Table.Row>
              
          
          </Table.Body>
          
        </Table>
        </form>
      </Container>
    </div>
  )
}
export default SignupPage
