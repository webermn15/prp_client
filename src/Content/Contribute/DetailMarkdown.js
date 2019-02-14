import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactQuill from 'react-quill';
import { FieldContainer, FormLabel } from './formstyles';

import 'react-quill/dist/quill.snow.css';

const StyledQuill = styled(ReactQuill)`
	background-color: ${({theme}) => theme.palette.offwhite};
	color: ${({theme}) => theme.palette.offblack};
	margin: 0 1rem;
	border: 1px solid ${({theme}) => theme.palette.primary[0]};
	border-radius: 0.3rem;

	& > div.ql-toolbar {
		border: none;
		border-bottom: 1px solid ${({theme}) => theme.palette.primary[0]};
		border-radius: 0.3rem 0.3rem 0 0;
	}

	& > div.ql-container {
		min-height: 10rem;
		border: none;
		border-top: 1px solid ${({theme}) => theme.palette.primary[0]};
		border-bottom: 1px solid ${({theme}) => theme.palette.primary[0]};
		background-color: ${({theme}) => theme.palette.offwhite};
		margin-bottom: 1rem;
	}
`

const DetailMarkdown = ({detail, handleChange}) => {
	return(
		<FieldContainer style={{flexDirection: 'column'}}>
			<FormLabel style={{paddingLeft: '1.2rem'}} name="detail">Ranking details:</FormLabel>
			<StyledQuill 
				defaultValue={detail}
				onChange={handleChange}
			/>
		</FieldContainer>
	)
}

export default DetailMarkdown;

DetailMarkdown.propTypes = {
	detail: PropTypes.string,
	handleChange: PropTypes.func
}