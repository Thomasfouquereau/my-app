import React, { useState } from "react"
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Form from './component/Create-Employee/indexForm';
import EmployeeList from './component/Current-Employees/indexTable';

function App() {
  const [employeeList, setEmployeeList] = useState([]);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form setEmployeeList={setEmployeeList} employeeList={employeeList} />} />
          <Route path="/employee-list" element={<EmployeeList employeeList={employeeList} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
