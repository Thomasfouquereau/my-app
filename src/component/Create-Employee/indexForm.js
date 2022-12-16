import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import BasicDatePicker from "../Create-Employee/datePicker/datePicker";
import DropdownState from "../Create-Employee/dropdown/dropdownState.js";
import DropdownDepartement from "../Create-Employee/dropdown/dropdownDepartement.js";
import Modal from "../Create-Employee/modal/modal.js";
import { Link } from "react-router-dom";
// import EmployeeList from "../Current-Employees/indexTable";

const GlobalStyle = createGlobalStyle`
    body {
        background-color: #EEF0F2;
    }
`;

const LinkButton = styled(Link)`
    text-decoration: none;
    color: #141414;
    background-color: #EEC643;
    border: 1px solid #EEC643;
    border-radius: 5px;
    padding: 10px 20px;
    margin-bottom: 20px;
   &:hover {
        background-color: #fff;
        color: #EEC643;
    }
`;

const Input = styled.input`
    width: 90%;
    height: 40px;
    border: 1px solid rgba(34,36,38,.15);
    border-radius: 5px;
    padding: 0 10px;
    margin-bottom: 10px;
`;

const InputAddress = styled.input`
    width: 100%;
    height: 40px;
    border: 1px solid rgba(34,36,38,.15);
    border-radius: 5px;
    padding: 0 10px;
    margin-bottom: 10px;
`;

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 15%;
`;

const InputWrapperAddress = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const Label = styled.label`
    font-size: 17px;
    font-weight: bold;
    margin-bottom: 10px;
`;

const AddressWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border: 2px solid #EEC643;
    border-radius: 10px;
    width: 15%;
    margin-top:20px;
    margin-bottom:20px;
    padding-top: 10px;
`;

const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 50px;
`;

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 20px;
`;

const ButtonCreate = styled.button`
    width: 100px;
    height: 30px;
    background-color: #EEC643;
    color: #141414;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        background-color: #fff;
        color: #EEC643;
    }
`;

export default function Form(props) {
    const SetEmployeeList = props.setEmployeeList;
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [birthDate, setBirthDate] = React.useState();
    const [startDate, setStartDate] = React.useState();
    const [street, setStreet] = React.useState("");
    const [city, setCity] = React.useState("");
    const [state, setState] = React.useState("");
    const [zipCode, setZipCode] = React.useState("");
    const [departement, setDepartement] = React.useState("");
    const [showModal, setShowModal] = useState(false);
    const valueFirstName = (e) => {
        setFirstName(e.target.value);
    }
    const valueLastName = (e) => {
        setLastName(e.target.value);
    }
    const valueStreet = (e) => {
        setStreet(e.target.value);
    }

    const valueCity = (e) => {
        setCity(e.target.value);
    }
    const valueZip = (e) => {
        setZipCode(e.target.value);
    }
    let BirthDate = ""
    if (birthDate === undefined) {
        BirthDate = birthDate;
    } else {
        BirthDate = birthDate.$M + "/" + birthDate.$D + "/" + birthDate.$y;
        BirthDate.toString();
    }
    let StartDate = ""
    if (startDate === undefined) {
        StartDate = startDate;
    } else {
        StartDate = startDate.$M + "/" + startDate.$D + "/" + startDate.$y;
        StartDate.toString();
    }
    const labelStart = "Start Date";
    const labelBirth = "Date of Birth";
    const ModalName = "Employe Created!";
    return (
        <>
            <GlobalStyle />
            <FormWrapper>
                <LinkButton to="/employee-list">Employee List</LinkButton>
                <InputWrapper>
                    <Label>First Name</Label>
                    <Input type="text" placeholder="First Name" onChange={valueFirstName} />
                </InputWrapper>
                <InputWrapper>
                    <Label>Last Name</Label>
                    <Input type="text" placeholder="First Name" onChange={valueLastName} />
                </InputWrapper>
                <InputWrapper>
                    <Label>{labelBirth}</Label>
                    <BasicDatePicker value={birthDate} onChange={(val) => setBirthDate(val)} label={labelBirth} />
                </InputWrapper>
                <InputWrapper>
                    <Label>{labelStart}</Label>
                    <BasicDatePicker value={startDate} onChange={(val) => setStartDate(val)} label={labelStart} />
                </InputWrapper>
                <AddressWrapper>
                    <InputWrapperAddress>
                        <Label>Street</Label>
                        <InputAddress type="text" placeholder="Street" onChange={valueStreet} />
                    </InputWrapperAddress>
                    <InputWrapperAddress>
                        <Label>City</Label>
                        <InputAddress type="text" placeholder="City" onChange={valueCity} />
                    </InputWrapperAddress>
                    <InputWrapperAddress>
                        <Label>State</Label>
                        <DropdownState value={state} getState={(val) => setState(val)} />
                    </InputWrapperAddress>
                    <InputWrapperAddress>
                        <Label>Zip</Label>
                        <InputAddress type="text" placeholder="Zip" onChange={valueZip} />
                    </InputWrapperAddress>
                </AddressWrapper>
                <InputWrapper>
                    <Label>Departement</Label>
                    <DropdownDepartement getDepartement={(val) => setDepartement(val)} />
                </InputWrapper>
            </FormWrapper>
            <ButtonWrapper>
                <ButtonCreate onClick={() => {
                    SetEmployeeList((prevEmployeeList) => [...prevEmployeeList,
                    {
                        firstName: firstName,
                        lastName: lastName,
                        birthDate: BirthDate,
                        startDate: StartDate,
                        street: street,
                        city: city,
                        state: state,
                        zipCode: zipCode,
                        departement: departement
                    }]);
                    setShowModal(true)
                }}>Create</ButtonCreate>
                <Modal showModal={showModal} setShowModal={setShowModal} Name={ModalName} showBGModal={true} />
            </ButtonWrapper>
        </>
    );
}