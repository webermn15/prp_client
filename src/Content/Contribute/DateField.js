import React, { Component } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

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
      <DatePicker
        selected={this.state.date}
        onChange={this.handleChange}
      />
    );
  }
}

export default DateField;