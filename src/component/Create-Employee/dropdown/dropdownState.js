import { faker } from '@faker-js/faker';
import _ from 'lodash'
import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import styled from 'styled-components';

const DropdownStyle = styled(Dropdown)`
  width: 90%;
  height: 30px;
  border: 1px solid #EEC643;
  border-radius: 5px;
  padding: 0 10px;
  margin-bottom: 10px;
`;

function DropdownState(props) {
  const addressDefinitions = faker.definitions.address
  const stateOptions = _.map(addressDefinitions.state, (state, index) => ({
    key: addressDefinitions.state_abbr[index],
    text: state,
    value: state,
  }))
  const [state, setState] = React.useState('')
  const handleChange = (e, { value }) => {
    setState(value)
  }
  props.getState(state)
  return (
    <DropdownStyle
      placeholder='State'
      fluid
      search
      selection
      options={stateOptions}
      onChange={handleChange}
      
    />
  )
}

export default DropdownState