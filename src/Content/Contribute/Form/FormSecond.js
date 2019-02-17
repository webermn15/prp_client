import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormButton, WarningText, FieldContainer, FieldContent, FormHeader, FormHeaderContainer } from './formstyles';
import { WarningIcon } from '../../../style';

import { SelectedOptions, DateField, TextInput, FileInput, DetailMarkdown } from './FormComponents';

class FormSecond extends Component {
	constructor(props) {
		super(props)

		this.state = {
			keyboard: {
				bindings: {
					tab: false
				}
			}
		}
	}
	componentDidMount() {
		const { detail } = this.props;
		const md = document.querySelector(".ql-editor");
		md.setAttribute('tabindex', 0);
		md.innerHTML = detail;
	}
	render() {
		const { formData, handleClear, date, handleDateChange, title, handleTitleChange, detail, handleDetailChange, warning, submitSecond } = this.props;
		return(
			<div>
				<SelectedOptions formData={formData} handleClick={handleClear} />
				<FieldContainer style={{flexDirection: 'column'}}>
					<FormHeaderContainer>
						<FormHeader style={{paddingBottom: '1rem'}}>
							Ranking Metadata
						</FormHeader>
					</FormHeaderContainer>
					<FieldContent style={{flexWrap: 'wrap'}}>
						<DateField date={date} handleChange={handleDateChange}/>
						<TextInput name="title" placeholder="Enter ranking title..." value={title} handleChange={handleTitleChange} />
						<FileInput />
					</FieldContent>
				</FieldContainer>
				<DetailMarkdown modules={this.state} value={detail} handleChange={handleDetailChange} />
				<FormButton
					onClick={e => submitSecond(e)}
				>
					Preview and Add Ranks
				</FormButton>
				{warning ? (<WarningText><WarningIcon className="svg-icon" /><span>{warning}</span></WarningText>) : null}
			</div>
		)
	}
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