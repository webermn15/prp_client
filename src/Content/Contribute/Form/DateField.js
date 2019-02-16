import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import { InputWrapper, FormLabel } from './formstyles';

import 'react-datepicker/dist/react-datepicker.css';

const DateInput = styled(DatePicker)`
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 0.3rem;
  border: 1px solid ${({theme}) => theme.palette.primary[0]};

  &:focus {
    box-shadow: 0 0 0 2px ${({theme}) => theme.palette.focused};
    outline: none;
  }
`

const DateField = ({date, handleChange}) => {
  return (
    <InputWrapper>
      <FormLabel name="date">Select Date:</FormLabel>
      <DateInput
        selected={date}
        onChange={handleChange}
      />
    </InputWrapper>
  )
}

export default DateField;

DateField.propTypes = {
  date: PropTypes.object,
  handleChange: PropTypes.func
}