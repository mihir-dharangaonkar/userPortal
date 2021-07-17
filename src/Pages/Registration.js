import React, { useState, createRef } from "react"
import { Table, Button, Form, input } from "semantic-ui-react"
import InputBox from "../BasicComponents/InputBox.js"
import Header from "../BasicComponents/Header.js"
import CustomSelect from "../BasicComponents/CustomSelect.js"
import RadioButtons from "../BasicComponents/RadioButtons.js"
import CommentBox from "../BasicComponents/CommentBox.js"
import Buttons from "../BasicComponents/Buttons.js"
import styled from "styled-components"
import Axios from "axios"
import { useGet } from "../Constants/useRest.js"
import UserIcon from "../Icons/User.png"
import { TOTAL_LENGTH } from "../Constants/URI.js"
import { Modal } from "semantic-ui-react"
import BottomBorderTable from "../BasicComponents/BottomBorderTable.js"
import HeaderNameContext from "../Contexts/HeaderNameContext.js"
import FooterContext from "../Contexts/FooterContext"
import Footer from "../BasicComponents/Footer"
import { toast } from "react-toastify"

const ButtonAlign = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`

const Asteric = styled.span`
  color: red;
`

const Heading = styled.div`
  display: flex;
  font-weight: bold;
  text-decoration: underline;

  justify-content: flex-start;
  padding: 10px;
  margin: 30px;
`
export const TextInputElement = styled.input.attrs({
  placeholderTextColor: 'gray',
})`
  font-size: 15px;
  line-height: 18px;
  color: '#000';
`;
const Registration = ({ history, match }) => {
  const [hide, setHide] = useState(false)
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryDropDown: "",
    fileUpload: [],
    comment: "",
    date: "",
    radiogroup: "",
    Hindu: "",
    Jews: "",
    budhist: ""
  })

  let derivedReligion = ""
  if (state.Hindu === "on") {
    derivedReligion = "Hindu"
  } else if (state.Jews === "on") {
    derivedReligion = "Jews"
  } else {
    derivedReligion = "budhist"
  }
  function HandleInput(e) {
    setState({
      ...state,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value
    })
  }

  const handleHide = () => {
    setHide(true)
  }
  const handleShow = (e) => {
    state.comment = ""
    setHide(false)
  }
  const look = () => {
    return hide ? "flex" : "none"
  }

  const { data } = useGet("http://localhost:5000/country")

  const Labels = [
    { Label: "Male", value: "Male" },
    { Label: "Female", value: "Female" },
    { Label: "Other", value: "Other" }
  ]  

  const Text = React.useContext(HeaderNameContext)
  const ft = React.useContext(FooterContext)
  const FirstNameRef = createRef()
  return (
    <>
      <Form
        method='POST'
        onSubmit={(e) => {
          e.preventDefault()
          if (
            state.firstName === "" ||
            state.lastName === "" ||
            state.email === ""
          ) {
            toast.warn("Please submit all fields. Close this message to proceed.If you see any issue or not able to proceed, please send email to mihir.dharangaonkar@gmail.com")
          } else {
            Axios.post("http://localhost:5000/register", {
              firstName: state.firstName,
              lastName: state.lastName,
              country: state.countryDropDown,
              email: state.email,
              date: state.date,
              comment: state.comment,
              religion: derivedReligion,
              gender: state.radiogroup,
              doc: state.fileUpload
            })

            history.push(`/Success`)
          }
        }}
      >
        <Form.Field>
          <Header header={Text.Text} path={UserIcon} />

          <Heading>
            <h2>Basic Information </h2>
          </Heading>

          <BottomBorderTable selectable>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Fields</Table.HeaderCell>
                <Table.HeaderCell>Values</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  Please enter your name:<Asteric>*</Asteric>:
                </Table.Cell>
                <Table.Cell>
                  <InputBox
                    id='firstName'
                    type='text'
                    name='firstName'
                    ref={FirstNameRef}
                    placeholder={TextInputElement}
                    
                    value={state.firstName}
                    onPress={HandleInput}
                  />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  कृपया आपले आडनाव प्रविष्ट करा <Asteric>*</Asteric>
                </Table.Cell>
                <Table.Cell>
                  <InputBox
                    id='lastName'
                    name='lastName'
                    placeholder='Last Name'
                    type='text'
                    value={state.lastName}
                    onPress={HandleInput}
                  />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  कृपया आपला ईमेल प्रविष्ट करा<Asteric>*</Asteric>
                </Table.Cell>
                <Table.Cell>
                  <input
                    id='email'
                    placeholder='Email'
                    type='email'
                    value={state.email}
                    onChange={HandleInput}
                    name='email'
                  />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  तुमचा देश निवडा <Asteric>*</Asteric>
                </Table.Cell>
                <Table.Cell>
                  <CustomSelect
                    name='countryDropDown'
                    options={[]}
                    value={state.countryDropDown}
                    handleChange={HandleInput}
                  />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  आपले लिंग निवडा <Asteric>*</Asteric>
                </Table.Cell>
                <Table.Cell>
                  <label>
                    Male
                    <input
                      style={{ margin: "10px" }}
                      id='Male'
                      type='radio'
                      value='Male'
                      name='radiogroup'
                      onChange={HandleInput}
                    />
                  </label>
                  <label>
                    Female
                    <input
                      style={{ margin: "10px" }}
                      id='Female'
                      type='radio'
                      value='Female'
                      name='radiogroup'
                      onChange={HandleInput}
                    />
                  </label>
                  <label>
                    Other
                    <input
                      style={{ margin: "10px" }}
                      id='Other'
                      type='radio'
                      value='Other'
                      name='radiogroup'
                      onChange={HandleInput}
                    />
                  </label>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  तुमचा धर्म निवडा<Asteric>*</Asteric>:{" "}
                </Table.Cell>
                <Table.Cell>
                  <label>
                    Hindu
                    <input
                      style={{ margin: "10px" }}
                      id='Hindu'
                      type='checkbox'
                      checked={state.Hindu}
                      name='Hindu'
                      onChange={HandleInput}
                    />
                  </label>
                  <label>
                    Budhist
                    <input
                      style={{ margin: "10px" }}
                      id='Budhist'
                      type='checkbox'
                      checked={state.budhist}
                      name='budhist'
                      onChange={HandleInput}
                    />
                  </label>
                  <label>
                    Jews
                    <input
                      style={{ margin: "10px" }}
                      id='Jews'
                      type='checkbox'
                      checked={state.Jews}
                      name='Jews'
                      onChange={HandleInput}
                    />
                  </label>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  जन्मतारीख निवडा<Asteric>*</Asteric>{" "}
                </Table.Cell>
                <Table.Cell>
                  <InputBox
                    id='date'
                    type='Date'
                    name='date'
                    Value={state.date}
                    onPress={HandleInput}
                  />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>कर उद्देशाने आपला देश निवडा</Table.Cell>
                <Table.Cell>
                  <Modal trigger={<Button>Add Taxation Country</Button>}>
                    <Modal.Header>Select one country</Modal.Header>
                    <Modal.Content>
                      <CustomSelect
                        id='countryDropDown'
                        name='countryDropDown'
                        options={[]}
                        value={state.popUpCountry}
                        handleChange={HandleInput}
                      />
                      <Button secondary style={{ margin: "60px" }}>
                        Add
                      </Button>
                      <p> {`Do you have TIN with you?`} </p>
                      <RadioButtons options={Labels} />
                    </Modal.Content>
                  </Modal>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  कागदपत्रे अपलोड करा<Asteric>*</Asteric>
                </Table.Cell>
                <Table.Cell>
                  <InputBox
                    id='file'
                    type='file'
                    name='fileUpload'
                    accept='.pdf'
                    value={state.fileUpload}
                    onPress={HandleInput}
                  />
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>
                  Do you want to enter comments?<Asteric>*</Asteric>{" "}
                </Table.Cell>
                <Table.Cell>
                  Yes
                  <input type={"radio"} name={"comment"} onChange={handleHide} />
                  No
                  <input type={"radio"} name={"comment"} onChange={handleShow} />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  टिप्पण्या<Asteric>*</Asteric>{" "}
                </Table.Cell>
                <Table.Cell style={{ display: look() }}>
                  <CommentBox
                    id='comment'
                    name='comment'
                    value={state.comment}
                    onComment={HandleInput}
                  />
                  {`${state.comment.length}/${TOTAL_LENGTH}`}
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </BottomBorderTable>

          <ButtonAlign>
            <Buttons type='submit' value='submit' text='Submit the information' />
          </ButtonAlign>
        </Form.Field>
        <Footer {...ft} />
      </Form>
    </>
  )
}

export default Registration
