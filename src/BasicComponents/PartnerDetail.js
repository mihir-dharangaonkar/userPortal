import React, { useState } from "react"
import { useGet } from "../Constants/useRest.js"
import Loading from "../BasicComponents/Loading.js"
import Buttons from "../BasicComponents/Buttons"
import { Message } from "semantic-ui-react"
import Header from "../BasicComponents/Header.js"
import UserIcon from "../Icons/UserDetailsIcon.png"
import styled from "styled-components"
import { Table, Input, Button } from "semantic-ui-react"

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
const PlaneInput = styled(Input)`
  && {
    width: 100%;
  }
`
const PartnerDetail = ({ history, match }) => {
const user = match.params.id
const { data, loading, error } = useGet(
    `http://localhost:5000/getRegisterUser/${user}`
  )




  const [edit, setEdit] = useState(false)
  const [label, setLabel] = useState("Edit data")
const [state,setState]=useState({firstName:''})

  const handleEdit = () => {
    if (!edit) {
      setLabel("Submit Change")
      setEdit(true)
    } else {
      setEdit(false)
      setLabel("Edit data")
    }
  }

 if (loading) {
    return <Loading />
  }
  if (error) {
    alert(error.message)
  }

  const handleChange=(e)=>{
  setState({
  ...state,
  [e.target.name]:e.target.value
  })}

  return (
    <>
      <Header header="User details information" path={UserIcon} />
      <Button onClick={handleEdit}>{label}</Button>
      <h4>Basic Information</h4>
      <BottomBorder />
      <PartnerDetailTable>
        <Table.Row>
          <Table.Cell>First Name </Table.Cell>
          <Table.Cell>
            {edit ? (
              <PlaneInput transparent value={state.firstName} name="firstName" onChange={handleChange} />
            ) : (
              <PlaneInput transparent disabled value={data[0].firstName} />
            )}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Last Name</Table.Cell>
          <Table.Cell>
            {edit ? (
              <PlaneInput transparent value={data[0].lastName} />
            ) : (
              <PlaneInput transparent disabled value={data[0].lastName} />
            )}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Gender</Table.Cell>
          <Table.Cell>
            {edit ? (
              <PlaneInput transparent value={data[0].gender} />
            ) : (
              <PlaneInput transparent disabled value={data[0].gender} />
            )}
          </Table.Cell>
        </Table.Row>
      </PartnerDetailTable>
      <h4>Country Information</h4>
      <BottomBorder />
      <PartnerDetailTable>
        <Table.Row>
          <Table.Cell>Country </Table.Cell>
          <Table.Cell>
            {edit ? (
              <PlaneInput transparent value={data[0].country} />
            ) : (
              <PlaneInput transparent disabled value={data[0].country} />
            )}
          </Table.Cell>
        </Table.Row>
      </PartnerDetailTable>
      <h4>Religion Information</h4>
      <BottomBorder />
      <PartnerDetailTable>
        <Table.Row>
          <Table.Cell>Religion </Table.Cell>
          <Table.Cell>
            {edit ? (
              <PlaneInput transparent value={data[0].religion} />
            ) : (
              <PlaneInput transparent disabled value={data[0].religion} />
            )}
          </Table.Cell>
        </Table.Row>
      </PartnerDetailTable>
      <h4>Contact Information</h4>
      <BottomBorder />
      <PartnerDetailTable>
        <Table.Row>
          <Table.Cell>Email </Table.Cell>
          <Table.Cell>
            {edit ? (
              <PlaneInput transparent value={data[0].email} />
            ) : (
              <PlaneInput transparent disabled value={data[0].email} />
            )}
          </Table.Cell>
        </Table.Row>
      </PartnerDetailTable>
      <h4>Comment Information</h4>
      <BottomBorder />
      <PartnerDetailTable>
        <Table.Row>
          <Table.Cell>Comment </Table.Cell>
          <Table.Cell>
            {edit ? (
              <PlaneInput transparent value={data[0].comment} />
            ) : (
              <PlaneInput transparent disabled value={data[0].comment} />
            )}
          </Table.Cell>
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
