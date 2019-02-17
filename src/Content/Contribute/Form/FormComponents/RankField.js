import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StyledTextInput, ReactSelect, InputWrapper } from '../formstyles';

const RankContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid ${({theme}) => theme.palette.primary[0]};
	padding: 0.6rem 1rem;
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
`

const RankField = ({ind, characters, playerData, handlePrefixChange, handleTagChange, handleCharacterSelect}) => {
	const { player_tag, sponsor_prefix, played_characters } = playerData;
	return(
		<RankContainer>
			<RankIndicator>
				<span>{`# ${ind + 1}`}</span>
			</RankIndicator>
			<StyledTextInput
				style={{maxWidth: '6rem'}}
				type="text"
				name="prefix"
				value={sponsor_prefix}
				placeholder="Sponsor..."
				onChange={handlePrefixChange}
			/>
			<StyledTextInput
				type="text"
				name="tag"
				value={player_tag}
				placeholder="Enter tag..."
				onChange={handleTagChange}
			/>
			<InputWrapper style={{minWidth: '10rem'}}>
				<ReactSelect
					value={played_characters}
					name="characters"
					onChange={handleCharacterSelect}
					isDisabled={false}
					options={characters}
					className="form-select-container"
					classNamePrefix="form-select"
				/>
			</InputWrapper>
		</RankContainer>
	)
}

export default RankField;

RankField.propTypes = {
	ind: PropTypes.number,
	playerData: PropTypes.object,
	characters: PropTypes.array,
	handleTagChange: PropTypes.func,
	handlePrefixChange: PropTypes.func,
	handleCharacterSelect: PropTypes.func
}