import React from 'react';
import PropTypes from 'prop-types';
import { FormButton, WarningText, FieldContainer } from './formstyles';
import { WarningIcon } from '../../../style';

import { SelectedOptions, DateField, TextInput, FileInput, DetailMarkdown } from './FormComponents';

const FormSecond = ({formData, handleClear, date, handleDateChange, title, handleTitleChange, detail, handleDetailChange, warning, submitSecond}) => {
	return(
		<div>
			<SelectedOptions formData={formData} handleClick={handleClear} />
			<FieldContainer style={{justifyContent: 'space-between', flexWrap: 'wrap'}}>
				<DateField date={date} handleChange={handleDateChange}/>
				<TextInput name="title" placeholder="Enter ranking title..." value={title} handleChange={handleTitleChange} />
				<FileInput />
			</FieldContainer>
			<DetailMarkdown value={detail} handleChange={handleDetailChange} />
			<FormButton
				onClick={e => submitSecond(e)}
			>
				Preview and Add Ranks
			</FormButton>
			{warning ? (<WarningText><WarningIcon className="svg-icon" /><span>{warning}</span></WarningText>) : null}
		</div>
	)
}

export default FormSecond;

FormSecond.propTypes = {
	formData: PropTypes.object,
	handleClear: PropTypes.func,
	date: PropTypes.object,
	handleDateChange: PropTypes.func,
	title: PropTypes.string,
	handleTitleChange: PropTypes.func,
	detail: PropTypes.string,
	handleDetailChange: PropTypes.func,
	warning: PropTypes.string,
	submitSecond: PropTypes.func
}