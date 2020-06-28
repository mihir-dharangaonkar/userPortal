import React from "react"
import { useGet } from "../Constants/useRest.js"
import Loading from "../BasicComponents/Loading.js"
import Buttons from "../BasicComponents/Buttons"
import { Message } from "semantic-ui-react"
import Header from "../BasicComponents/Header.js"
import UserIcon from "../Icons/UserDetailsIcon.png"
import styled from "styled-components"
import { Table } from "semantic-ui-react"

const PartnerDetail = ({ history, match }) => {
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
  const BottomBorder = styled.div`
    border-bottom: 5px solid gray;
    margin: 10px;
  `
  const PartnerDetailTable = styled(Table)`
    && {
      border: none;
      border-bottom: 1px solid gray;
    }
  `
  return (
    <>
      <Header header="User details information" path={UserIcon} />
      <h4>Basic Information</h4>
      <BottomBorder />
      <PartnerDetailTable>
        <Table.Row>
          <Table.Cell>First Name </Table.Cell>
          <Table.Cell>{data[0].firstName}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Last Name</Table.Cell>
          <Table.Cell>{data[0].lastName}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Gender</Table.Cell>
          <Table.Cell>{data[0].gender}</Table.Cell>
        </Table.Row>
      </PartnerDetailTable>
      <h4>Country Information</h4>
      <BottomBorder />
      <PartnerDetailTable>
        <Table.Row>
          <Table.Cell>Country </Table.Cell>
          <Table.Cell>{data[0].country}</Table.Cell>
        </Table.Row>
      </PartnerDetailTable>
      <h4>Religion Information</h4>
      <BottomBorder />
      <PartnerDetailTable>
        <Table.Row>
          <Table.Cell>Religion </Table.Cell>
          <Table.Cell>{data[0].religion}</Table.Cell>
        </Table.Row>
      </PartnerDetailTable>
      <h4>Contact Information</h4>
      <BottomBorder />
      <PartnerDetailTable>
        <Table.Row>
          <Table.Cell>Email </Table.Cell>
          <Table.Cell>{data[0].email}</Table.Cell>
        </Table.Row>
      </PartnerDetailTable>
      <h4>Comment Information</h4>
      <BottomBorder />
      <PartnerDetailTable>
        <Table.Row>
          <Table.Cell>Comment </Table.Cell>
          <Table.Cell>{data[0].comment}</Table.Cell>
        </Table.Row>
      </PartnerDetailTable>

      <Buttons text={`Download PDF`} />

      <Message>
        <Message.Header>Next Steps</Message.Header>
        <Message.List>
          <Message.Item>
            You can click on Download PDF to get data in PDF
          </Message.Item>
          <Message.Item>
            You can click on enter{" "}
            <a href="http://localhost:3000/registration">new registration form </a>
            link below
          </Message.Item>
        </Message.List>
      </Message>
    </>
  )
}

export default PartnerDetail
