import React from 'react';
import PropTypes from 'prop-types';
import { InputWrapper, FormLabel, StyledTextInput } from './formstyles';

const TextInput = ({name, placeholder, handleChange}) => {
	return(
		<InputWrapper>
			<FormLabel name={name}>Enter {name}:</FormLabel>
			<StyledTextInput placeholder={placeholder} onChange={e => handleChange(e)}/>
		</InputWrapper>
	)
}

export default TextInput;

TextInput.propTypes = {
	name: PropTypes.string,
	placeholder: PropTypes.string,
	handleChange: PropTypes.func
}