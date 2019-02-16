import React from 'react';
// import PropTypes from 'prop-types';
import { InputWrapper, FormLabel } from '../formstyles';

const FileInput = () => {
	return(
		<InputWrapper style={{marginRight: '1rem'}}>
			<FormLabel htmlFor="image">Upload image: (not required)</FormLabel>
			<input name="image" type="file" style={{fontSize: '0.8rem'}}/>
		</InputWrapper>
	)
}

export default FileInput;