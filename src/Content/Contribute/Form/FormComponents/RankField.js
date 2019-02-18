import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ReactSelect, ReactAsyncSelect, InputWrapper } from '../formstyles';
import { SvgButtonContainer, RemoveIcon } from '../../../../style';

const RankContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: center;
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

const RankField = ({ind, playerData, characters, matchPlayers, handleTagChange, handleCharacterSelect, handleRemoveRankField}) => {
	const { player_tag, played_characters } = playerData;
	return(
		<RankContainer>
			<RankIndicator
				style={{position: 'absolute', left: '1rem'}}
			>
				<span>{`# ${ind + 1}`}</span>
			</RankIndicator>
			<InputWrapper style={{minWidth: '15rem', maxWidth: '15rem'}}>
				<ReactAsyncSelect
					value={player_tag}
					name="tag"
					onChange={handleTagChange}
					loadOptions={matchPlayers}
					noOptionsMessage={() => null}
					arrowRenderer={() => null}
					placeholder="Enter tag..."
					className="form-select-container"
					classNamePrefix="form-select"
				/>
			</InputWrapper>
			<InputWrapper style={{minWidth: '15rem', maxWidth: '15rem', marginLeft: '4rem'}}>
				<ReactSelect
					value={played_characters}
					name="characters"
					onChange={handleCharacterSelect}
					isMulti={true}
					options={characters}
					placeholder="Characters played..."
					className="form-select-container"
					classNamePrefix="form-select"
				/>
			</InputWrapper>
			{(ind > 4) && 
			<SvgButtonContainer 
				style={{position: 'absolute', right: '1rem'}}
				onClick={handleRemoveRankField}
			>
				<RemoveIcon className="svg-icon" />
			</SvgButtonContainer>}
		</RankContainer>
	)
}

export default RankField;

RankField.propTypes = {
	ind: PropTypes.number,
	playerData: PropTypes.object,
	characters: PropTypes.array,
	matchPlayers: PropTypes.func,
	handleTagChange: PropTypes.func,
	handleCharacterSelect: PropTypes.func,
	handleRemoveRankField: PropTypes.func
}