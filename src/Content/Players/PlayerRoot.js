import React, { Component } from 'react';
import { ContentBody, ContentHeader, HeaderText, SubHeaderText } from '../../style';

class PlayerRoot extends Component {

	render() {
		return(
			<div>
				<ContentHeader>
					<div>
						<HeaderText>Search Players</HeaderText>
					</div>
				</ContentHeader>
				<ContentBody>
					<SubHeaderText>Search Players</SubHeaderText>
				</ContentBody>
			</div>
		)
	}
}

export default PlayerRoot;