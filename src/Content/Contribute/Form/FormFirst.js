import React from 'react';
import PropTypes from 'prop-types';
import { FormButton, WarningText, FormHeaderContainer, FormHeader, FieldContainer, FieldContent, FormLabel, InputWrapper, FieldTextWrapper, ReactSelect, ReactAsyncSelect } from './formstyles';
import { WarningIcon } from '../../../style';

const FormFirst = ({game, handleGameChange, gamesOptions, region, handleRegionChange, regionOptions, regionLevels, regionLevel, handleNewRegion, warning, submitFirst}) => {
	return(
		<div>
			<FieldContainer style={{flexDirection: 'column'}}>
				<FormHeaderContainer>
					<FormHeader>
						Set Game and Region
					</FormHeader>
				</FormHeaderContainer>
				<FieldContent>
					<InputWrapper style={{minWidth: '16rem'}}>
						<FormLabel htmlFor="game">Select game:</FormLabel>
						<ReactSelect
							value={game}
							name="game"
							onChange={handleGameChange}
							isDisabled={false}
							options={gamesOptions}
							className="form-select-container"
							classNamePrefix="form-select"
						/>
					</InputWrapper>
					<FieldTextWrapper>
						<span>Game not listed? Join the Discord and request it! Always looking to add new titles.</span>
					</FieldTextWrapper>
				</FieldContent>
			</FieldContainer>
			<FieldContainer>
				<InputWrapper style={{minWidth: '16rem'}}>
					<FormLabel htmlFor="region">Select or create region:</FormLabel>
					<ReactAsyncSelect
						value={region}
						name="region"
						onChange={handleRegionChange}
						loadOptions={regionOptions}
						noOptionsMessage={() => null}
						arrowRenderer={() => null}
						placeholder="Create or select region..."
						className="form-select-container"
						classNamePrefix="form-select"
					/>
				</InputWrapper>
				<FieldTextWrapper>
					<span>Ensure your region is not already listed in our records before adding a new one!</span>
				</FieldTextWrapper>
			</FieldContainer>
			{region && region.hasOwnProperty('__isNew__') && 
				<FieldContainer>
					<InputWrapper style={{minWidth: '12rem'}}>
						<FormLabel htmlFor="level">New region size:</FormLabel>
						<ReactSelect
							value={regionLevel}
							name="level"
							onChange={handleNewRegion}
							options={regionLevels}
							className="form-select-container"
							classNamePrefix="form-select"
						/>
					</InputWrapper>
					<FieldTextWrapper>
						<span>You can edit and add new region information once your submission has been approved.</span>
					</FieldTextWrapper>
				</FieldContainer>
			}
			<FormButton 
				onClick={e => submitFirst(e)}
			>
				Create New Ranking
			</FormButton>
			{warning ? (<WarningText><WarningIcon className="svg-icon" /><span>{warning}</span></WarningText>) : null}
		</div>
	)
}

export default FormFirst;

FormFirst.propTypes = {
	game: PropTypes.object,
	handleGameChange: PropTypes.func,
	gamesOptions: PropTypes.array,
	region: PropTypes.object,
	handleRegionChange: PropTypes.func,
	regionOptions: PropTypes.func,
	regionLevel: PropTypes.object,
	regionLevels: PropTypes.array,
	handleNewRegion: PropTypes.func,
	warning: PropTypes.string,
	submitFirst: PropTypes.func
}