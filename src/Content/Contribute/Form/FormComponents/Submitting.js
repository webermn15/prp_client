import React from 'react';
import PropTypes from 'prop-types';
import { LoadingSvg} from '../../../../style';

const Submitting = ({children}) => (
	<div style={{padding: '10rem 0'}}>
		<div style={{margin: '0 auto', width: '50%', textAlign: 'center'}}>
			<LoadingSvg />
			{children}
		</div>
	</div>
)

export default Submitting;

Submitting.propTypes = {
	children: PropTypes.node
}