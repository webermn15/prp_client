import React from 'react';
import { NavLink } from './style';

const Catch = props => {
	console.log(props)
	return(
		<div style={{margin: '0 auto', textAlign: 'center', padding: '2rem'}}>
			<div>
				This ish does not match any routes homie
			</div>
			<NavLink to="/">
				Go home
			</NavLink>
		</div>
	)
}

export default Catch;