import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import styled from 'styled-components'

const options = [
  { key: 1, text: 'Sales', value: 1 },
  { key: 2, text: 'Marketing', value: 2 },
  { key: 3, text: 'Engineering', value: 3 },
  { key: 4, text: 'Human Resources', value: 4 },
  { key: 5, text: 'Legal', value: 5 },
]

const DropdownA = styled (Dropdown)`
  width: 90%;
  height: 30px;
  border: 1px solid #EEC643;
  border-radius: 5px;
  padding: 0 10px;
  margin-bottom: 10px;
`;

function DropdownDepartement (props) {
  const [, setDepartement] = React.useState ('')
  const handleChange = (e, { value }) => {
    setDepartement(value)
    if(value === 1){
      props.getDepartement('Sales')
  } else if(value === 2){
      props.getDepartement('Marketing')
  } else if(value === 3){
      props.getDepartement('Engineering')
  } else if(value === 4){
      props.getDepartement('Human Resources')
  } else if(value === 5){
      props.getDepartement('Legal')
  }
  }
  return (
  <DropdownA  placeholder='Departement'  clearable options={options} selection onChange={handleChange} />
  )
}

export default DropdownDepartement