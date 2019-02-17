import React from 'react';
import PropTypes from 'prop-types';
import { FormButton, WarningText, FormHeaderContainer, FormHeader, FieldContainer, FieldContent, FormLabel, InputWrapper, FieldTextWrapper, ReactSelect } from './formstyles';
import { WarningIcon } from '../../../style';

const FormFirst = ({game, handleGameChange, gamesOptions, region, handleRegionChange, regionOptions, warning, submitFirst}) => {
	return(
		<div>
			<FieldContainer style={{flexDirection: 'column'}}>
				<FormHeaderContainer>
					<FormHeader style={{paddingBottom: '1rem'}}>
						Set Game and Region
					</FormHeader>
				</FormHeaderContainer>
				<FieldContent>
					<InputWrapper style={{minWidth: '16rem'}}>
						<FormLabel htmlFor="game">Select Game:</FormLabel>
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
					<FormLabel htmlFor="region">Select Region:</FormLabel>
					<ReactSelect
						value={region}
						name="region"
						onChange={handleRegionChange}
						isDisabled={game ? false : true}
						options={regionOptions}
						className="form-select-container"
						classNamePrefix="form-select"
					/>
				</InputWrapper>
				<FieldTextWrapper>
					<span>Game not listed? Join the Discord and request it! Always looking to add new titles.</span>
				</FieldTextWrapper>
			</FieldContainer>
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
	regionOptions: PropTypes.array,
	warning: PropTypes.string,
	submitFirst: PropTypes.func
}