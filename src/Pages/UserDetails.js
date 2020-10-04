import React from "react"
import { Table } from "semantic-ui-react"
import styled from "styled-components"
import Header from "../BasicComponents/Header.js"
import { useGet } from "../Constants/useRest.js"
import Loading from "../BasicComponents/Loading.js"
import UserIcon from "../Icons/UserDetailsIcon.png"

const BottomBorderTable = styled(Table)`
  border: none;
  text-align: top;
`

const UserDetails = ({ match }) => {
  const user = match.params.id

  const { data, loading, error } = useGet(
    `http://localhost:5000/getRegisterUser/${user}`
  )

  if (loading) {
    return <Loading />
  }
  if (error) {
    alert(error.message)
  }
  return (
    <>
      <Header header='Details of user' path={UserIcon} />

      <BottomBorderTable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Country</Table.HeaderCell>
            <Table.HeaderCell>Date of Birth</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data.map((user) => (
            <Table.Row key={user.id}>
              <Table.Cell>{user.name}</Table.Cell>
              <Table.Cell>{user.lastName}</Table.Cell>
              <Table.Cell>{user.email}</Table.Cell>
              <Table.Cell>{user.country}</Table.Cell>
              <Table.Cell>{user.date}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </BottomBorderTable>
    </>
  )
}

export default UserDetails
