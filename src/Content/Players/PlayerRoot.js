import React, { Component } from 'react';
import { ContentBody, ContentHeader, HeaderText } from '../../style';
import { FieldContainer, FormHeaderContainer, FormHeader, FieldContent, InputWrapper, FormLabel, StyledTextInput } from '../Contribute/Form/formstyles';

import PlayerSearchResults from './PlayerSearchResults';

class PlayerRoot extends Component {
	constructor(props) {
		super(props)

		this.state = {
			query: ''
		}
	}

	render() {
		const { query } = this.state;
		console.log(this.state);
		return(
			<div>
				<ContentHeader>
					<div>
						<HeaderText style={{fontSize: '3rem'}}>Search Players</HeaderText>
					</div>
				</ContentHeader>
				<ContentBody>
					<FieldContainer style={{flexDirection: 'column'}}>
						<FormHeaderContainer>
							<FormHeader>
								Search Players
							</FormHeader>
						</FormHeaderContainer>
						<FieldContent>
							<InputWrapper>
								<FormLabel htmlFor="query">Search:</FormLabel>
								<StyledTextInput name="query" placeholder="Player tag..." value={query} onChange={e => this.setState({[e.target.name]: e.target.value})}/>
							</InputWrapper>
						</FieldContent>
					</FieldContainer>
					<PlayerSearchResults />
				</ContentBody>
			</div>
		)
	}
}

export default PlayerRoot;