import React from 'react';
import PropTypes from 'prop-types';
import { FormButton, WarningText } from './formstyles';
import { WarningIcon } from '../../../style';

import { FormField } from './FormComponents';

const FormFirst = ({game, handleGameChange, gamesOptions, region, handleRegionChange, regionOptions, warning, submitFirst}) => {
	return(
		<div>
			<FormField
				name="game"
				value={game}
				handleChange={handleGameChange}
				options={gamesOptions}
				isDisabled={false}
				fieldText="Game not listed? Join the Discord and request it! Always looking to add new titles."
			/>
			<FormField
				name="region"
				value={region}
				handleChange={handleRegionChange}
				options={regionOptions}
				isDisabled={game ? false : true}
				fieldText="Or add a new region if it is not listed."
			/>
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