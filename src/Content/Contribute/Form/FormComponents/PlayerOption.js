import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { components } from 'react-select';

// const OptionInner = styled.div`
// 	padding: 0.4rem;

// 	&:hover,
// 	&:focus {
// 		background-color: #DEEBFF;
// 	}
// `

const OptionLabel = styled.div`
	font-weight: 700;
	font-size: 1.2rem;
`

const OptionMetadata = styled.div`
	display: flex;
	flex-direction: column;

`

const OptionRegion = styled.div`
	padding: 0 0.3rem;
	font-size: 0.7rem;
	text-transform: uppercase;
`

const PlayerOption = props => {
	const { data } = props;
	return(
		<components.Option {...props}>
				<OptionLabel>{data.label}</OptionLabel>
				<OptionMetadata>
					{data.regions && data.regions.map((region, i) => {
						return <OptionRegion key={i}>{region}</OptionRegion>
					})}
				</OptionMetadata>
		</components.Option>
	)
}

export default PlayerOption;

PlayerOption.propTypes = {
	data: PropTypes.object
}