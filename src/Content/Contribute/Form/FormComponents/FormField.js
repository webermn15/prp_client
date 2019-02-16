import React from 'react';
import PropTypes from 'prop-types';
import { FieldContainer, FormLabel, InputWrapper, FieldTextWrapper, ReactSelect } from '../formstyles';

const FormField = ({name, value, handleChange, options, isDisabled, fieldText}) => {
	return(
		<FieldContainer>
			<InputWrapper style={{minWidth: '16rem'}}>
				<FormLabel htmlFor={name}>Select {name}:</FormLabel>
				<ReactSelect
					value={value}
					name={name}
					onChange={handleChange}
					isDisabled={isDisabled}
					options={options}
					className="form-select-container"
					classNamePrefix="form-select"
				/>
			</InputWrapper>
			<FieldTextWrapper>
				<span>{fieldText}</span>
			</FieldTextWrapper>
		</FieldContainer>
	)
}

export default FormField;

FormField.propTypes = {
	name: PropTypes.string,
	value: PropTypes.object,
	handleChange: PropTypes.func,
	options: PropTypes.array,
	isDisabled: PropTypes.bool,
	fieldText: PropTypes.string
}