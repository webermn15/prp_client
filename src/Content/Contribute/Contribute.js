import React from 'react';
import FormContainer from './FormContainer';
import { HeaderText, ContentMain } from '../../style';

const Contribute = () => {
	return(
		<ContentMain>
			<HeaderText>Contribute</HeaderText>
			<p>
				Imagine if you will. a world where all power rankings are centralized, and you can easily parse the data to find out cool shit about ranking history and trends for a certain region or game. Wow. You can contribute to this world. It can be made real. This is the place to do it. You have arrived.
			</p>
			<FormContainer />
		</ContentMain>
	)
}

export default Contribute;