import React from 'react';
import FormContainer from './FormContainer';
import { HeaderText, ContentMain } from '../../style';

const Contribute = () => {
	return(
		<ContentMain>
			<HeaderText>Contribute!</HeaderText>
			<p>
				imagine if you will. a world where all power rankings are centralized. and you can easily parse the data to find out cool shit about ranking history and trends for a certain region or game. wow. you can contribute to this world. it can be made real. this is the place to do it. you have arrived.
			</p>
			<FormContainer />
		</ContentMain>
	)
}

export default Contribute;