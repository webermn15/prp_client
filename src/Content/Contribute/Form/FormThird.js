import React from 'react';
import PropTypes from 'prop-types';
import { FieldContainer, FormHeaderContainer, FormHeader, FormButton } from './formstyles';

import { PreviewModal, SelectedOptions, RankField } from './FormComponents';

const FormThird = ({formData, closePreviewModal, showPreviewModal, showModal, handleClear, ranks, characters, handleRankTagChange, handleRankPrefixChange, handleCharacterSelect, submitThird}) => {
	return(
		<div>
			{showModal ? (<PreviewModal preview={formData} handleClick={closePreviewModal} />) : null}
			<SelectedOptions formData={formData} handleClick={handleClear} />
			<FieldContainer style={{flexDirection: 'column', paddingTop: '0'}}>
				<FormHeaderContainer>
					<FormHeader>
						Set Player Ranks
					</FormHeader>
					<FormButton
						className="secondary-button"
						onClick={showPreviewModal}
					>
						Preview
					</FormButton>
				</FormHeaderContainer>
				{ranks.map((rank, i) => {
					return(
						<RankField
							key={i}
							ind={i}
							playerData={rank}
							characters={characters}
							handleTagChange={e => handleRankTagChange(e, i)}
							handlePrefixChange={e => handleRankPrefixChange(e, i)}
							handleCharacterSelect={e => handleCharacterSelect(e, i)}
						/>
					)
				})}
			</FieldContainer>
			<FormButton
				onClick={e => submitThird(e)}
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
	handleRankTagChange: PropTypes.func,
	handleRankPrefixChange: PropTypes.func,
	handleCharacterSelect: PropTypes.func,
	submitThird: PropTypes.func
}