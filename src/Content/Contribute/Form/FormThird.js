import React from 'react';
import PropTypes from 'prop-types';
import { FieldContainer, FormHeaderContainer, FormHeader, FormButton } from './formstyles';
import { SvgButtonContainer, AddIcon } from '../../../style';

import { PreviewModal, SelectedOptions, RankField } from './FormComponents';

const FormThird = ({formData, closePreviewModal, showPreviewModal, showModal, handleClear, ranks, characters, matchPlayers, handleRankTagChange, handleCharacterSelect, handleAddRankField, handleRemoveRankField, warning, submitThird}) => {
	return(
		<div>
			{showModal ? (<PreviewModal preview={formData} handleClose={closePreviewModal} handleSubmit={submitThird} warning={warning}/>) : null}
			<SelectedOptions formData={formData} handleClick={handleClear} />
			<FieldContainer style={{flexDirection: 'column'}}>
				<FormHeaderContainer>
					<FormHeader>
						Set Player Ranks
					</FormHeader>
				</FormHeaderContainer>
				{ranks.map((rank, i) => {
					return(
						<RankField
							key={i}
							ind={i}
							playerData={rank}
							characters={characters}
							matchPlayers={matchPlayers}
							handleTagChange={e => handleRankTagChange(e, i)}
							handleCharacterSelect={e => handleCharacterSelect(e, i)}
							handleRemoveRankField={e => handleRemoveRankField(e)}
						/>
					)
				})}
				<div 
					style={{margin: '0 auto', marginTop: '1rem'}}
				>
					<SvgButtonContainer
						onClick={e=> handleAddRankField(e)}
					>
						<AddIcon className="svg-icon" />
					</SvgButtonContainer>
				</div>
			</FieldContainer>
			<FormButton
				onClick={showPreviewModal}
			>
				Preview and Submit
			</FormButton>
		</div>
	)
}

export default FormThird;

FormThird.propTypes = {
	formData: PropTypes.object,
	closePreviewModal: PropTypes.func,
	showPreviewModal: PropTypes.func,
	showModal: PropTypes.bool,
	handleClear: PropTypes.func,
	ranks: PropTypes.array,
	characters: PropTypes.array,
	matchPlayers: PropTypes.func,
	handleRankTagChange: PropTypes.func,
	handleCharacterSelect: PropTypes.func,
	handleAddRankField: PropTypes.func,
	handleRemoveRankField: PropTypes.func,
	warning: PropTypes.string,
	submitThird: PropTypes.func
}