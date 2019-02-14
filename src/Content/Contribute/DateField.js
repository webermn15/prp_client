import React, { Component } from 'react';
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

class DateField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date()
    }
  }

  handleChange = (date) => {
    this.setState({
      date: date
    });
  }

  render() {
    return (
      <InputWrapper>
        <FormLabel name="date">Select Date:</FormLabel>
        <DateInput
          selected={this.state.date}
          onChange={this.handleChange}
        />
      </InputWrapper>
    );
  }
}

export default DateField;