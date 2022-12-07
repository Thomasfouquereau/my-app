import React from "react";
import DataTable from "./table/table";
import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        background-color: #EEF0F2;
    }
`;

const TableWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 50px;
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

function EmployeeList({ employeeList }) {
    return (
        <>
            <GlobalStyle />
            <TableWrapper>
                <LinkButton to="/">Create Employee</LinkButton>
                <DataTable employeeList={employeeList} />
            </TableWrapper>
        </>
    );
}

export default EmployeeList;