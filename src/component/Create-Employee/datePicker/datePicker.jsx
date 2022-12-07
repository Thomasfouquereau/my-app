import React from "react";
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import styled from "styled-components";

const DatePickerStyled = styled(DatePicker)`
    width: 90%;
    margin: 10px;
    background-color: #fff;
`;

export default function BasicDatePicker(props) {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePickerStyled
                label={props.label}
                value={props.value}
                onChange={props.onChange}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
    );
}
