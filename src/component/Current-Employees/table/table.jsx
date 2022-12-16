import React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

export default function DataTable(props) {
  const columns = [
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    { field: 'StartDate', headerName: 'Start Date', width: 130 },
    { field: 'Departement', headerName: 'Departement', width: 130 },
    { field: 'DateOfBirth', headerName: 'Date of Birth', width: 130 },
    { field: 'Street', headerName: 'Street', width: 130 },
    { field: 'City', headerName: 'City', width: 130 },
    { field: 'State', headerName: 'State', width: 130 },
    { field: 'ZipCode', headerName: 'Zip Code', width: 130 }
  ];
  let rows = [];
  const createRows = () => {
    props.employeeList.forEach((employee, index) => {
      rows.push({
        id: index,
        lastName: employee.lastName,
        firstName: employee.firstName,
        StartDate: employee.startDate,
        Departement: employee.departement,
        DateOfBirth: employee.birthDate,
        Street: employee.street,
        City: employee.city,
        State: employee.state,
        ZipCode: employee.zipCode
      });
    });
    return rows;
  };
  createRows(props);
  localStorage.setItem('employeeList', JSON.stringify(rows));
  const data = JSON.parse(localStorage.getItem('employeeList'));
  return (
    <div style={{ height: 400, width: '85%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        components={{ Toolbar: GridToolbar }}
        componentsProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
      />
    </div>
  );
}