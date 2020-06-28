import React, { useState } from "react"
import styled from "styled-components"

import { Table } from "semantic-ui-react"

import Loading from "../BasicComponents/Loading.js"
import PaginationComponent from "../BasicComponents/PaginationComponent.js"
import { useGet } from "../Constants/useRest.js"
import ImageView from "../BasicComponents/ImageView.js"
import logo from "../Icons/icons8-right-24.png"
import { toast } from "react-toastify"

import BottomBorderTable from "../BasicComponents/BottomBorderTable.js"

export const Wrapper = styled.div`
display: flex;
flex-direction:column;
width: 100%
align-items:center;
`
export const SearchBox = styled.input`
  border: none;
  border-bottom: 5px solid #4c7700;
  width: 60%;
  height: 50px;
  margin: 30px;
  margin-left: 230px;
`

export const Minimal = styled.button`
  border: none;
  background-color: white;
  opacity: 0.2;
`

const DataTable = ({ history, match }) => {
  const [text, setText] = useState("")

  const handleClick = (id) => {
    history.push(`/PartnerDetail/${id}`)
  }

  const handleEditClick = (key) => {
    history.push(`/registration/${key}`)
  }

  const { data, error, loading } = useGet("http://localhost:5000/getRegisterUser")

  if (loading) {
    return <Loading />
  }
  if (error) {
    return toast.error(error.message)
  }

  return (
    <>
      <Wrapper>
        <SearchBox
          placeholder={"Search for users..."}
          onChange={(e) => setText(e.target.value)}
        />

        <BottomBorderTable basic="very" padded collapsed striped fixed sortable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Edit</Table.HeaderCell>
              <Table.HeaderCell>First Name</Table.HeaderCell>
              <Table.HeaderCell>Last Name</Table.HeaderCell>
              <Table.HeaderCell>Email</Table.HeaderCell>
              <Table.HeaderCell>Country</Table.HeaderCell>
              <Table.HeaderCell>Date of Birth</Table.HeaderCell>
              <Table.HeaderCell>See details</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {data
              .filter(
                (emp) =>
                  emp.firstName.toLowerCase().includes(text) ||
                  emp.lastName.toLowerCase().includes(text) ||
                  emp.email.toLowerCase().includes(text) ||
                  emp.country.toLowerCase().includes(text)
              )
              .map((user) => (
                <Table.Row key={user.key}>
                  <Table.Cell>
                    <Minimal
                      onClick={() => {
                        handleEditClick(user.key)
                      }}
                    >
                      Edit
                    </Minimal>
                  </Table.Cell>
                  <Table.Cell>{user.firstName}</Table.Cell>
                  <Table.Cell>{user.lastName}</Table.Cell>
                  <Table.Cell>{user.email}</Table.Cell>
                  <Table.Cell>{user.country}</Table.Cell>
                  <Table.Cell>{user.date}</Table.Cell>
                  <Table.Cell>
                    <Minimal
                      onClick={() => {
                        handleClick(user.key)
                      }}
                    >
                      <ImageView path={logo} style={{ width: 5, height: 10 }} />
                    </Minimal>
                  </Table.Cell>
                </Table.Row>
              ))}
          </Table.Body>
        </BottomBorderTable>
        <PaginationComponent />
      </Wrapper>
    </>
  )
}

export default DataTable
