import React from 'react';
// import PropTypes from 'prop-types';
import { InputWrapper, FormLabel } from './formstyles';

const FileInput = () => {
	return(
		<InputWrapper>
			<FormLabel name="image">Upload image:</FormLabel>
			<input type="file" style={{fontSize: '0.8rem'}}/>
		</InputWrapper>
	)
}

export default FileInput;