import React from 'react';
import PropTypes from 'prop-types';
import { InputWrapper, FormLabel, StyledTextInput } from './formstyles';

const TextInput = ({name, value, placeholder, handleChange}) => {
	return(
		<InputWrapper>
			<FormLabel htmlFor={name}>Enter {name}:</FormLabel>
			<StyledTextInput name={name} type="text" placeholder={placeholder} value={value} onChange={e => handleChange(e)}/>
		</InputWrapper>
	)
}

export default TextInput;

TextInput.propTypes = {
	name: PropTypes.string,
	value: PropTypes.string,
	placeholder: PropTypes.string,
	handleChange: PropTypes.func
}