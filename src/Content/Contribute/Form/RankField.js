import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StyledTextInput } from './formstyles';
import { SvgButtonContainer, ArrowUp, ArrowDown } from '../../../style';

const RankContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	border-bottom: 1px solid ${({theme}) => theme.palette.primary[0]};
	padding: 1rem;
`

const RankIndicator = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	font-size: 1.4rem;
	font-weight: 700;
	text-align: center;
	color: ${({theme}) => theme.palette.offwhite};
	text-shadow: 1px 1px 3px ${({theme}) => theme.palette.primary[0]};

	& > span {
		padding: 0 0.6rem;
	}
`

const RankField = ({rankNum, value, handleChange}) => {
	return(
		<RankContainer>
			<div>
				<SvgButtonContainer><ArrowUp className="svg-icon"/></SvgButtonContainer>
				<SvgButtonContainer><ArrowDown className="svg-icon"/></SvgButtonContainer>
			</div>
			<RankIndicator>
				<span>{`# ${rankNum}`}</span>
			</RankIndicator>
			<StyledTextInput
				type="text"
				name="tag"
				value={value}
				placeholder="Enter tag..."
				onChange={handleChange}
			/>
		</RankContainer>
	)
}

export default RankField;

RankField.propTypes = {
	rankNum: PropTypes.number,
	value: PropTypes.string,
	handleChange: PropTypes.func
}