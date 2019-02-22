import React, { Component } from 'react';
import styled from 'styled-components';
import { ContentBody, ContentHeader, HeaderText, Button } from '../../style';
import { FieldContainer, FormHeaderContainer, FormHeader, InputWrapper, FormLabel, StyledTextInput } from '../Contribute/Form/formstyles';

import PlayerSearchResults from './PlayerSearchResults';

const StyledForm = styled.form`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: flex-end;
	padding-top: 1rem;
`

class PlayerRoot extends Component {
	constructor(props) {
		super(props)

		this.state = {
			query: '',
			players: [],
			queried: false
		}
	}

	requestMatchingPlayers = async e => {
		e.preventDefault();
		const { query } = this.state;
		const jsonQuery = {'match': query.toLowerCase()}
		try {
			const response = await fetch(`${process.env.API_URL}/api/players/match`, {
				method: 'POST',
				body: JSON.stringify(jsonQuery),
				headers: {
					'Content-Type': 'application/json'
				}
			});
			const body = await response.json();
			if (!response.ok) {
				console.log('error requesting regions for game: ', response);
				return []
			}
			else {
				const { matchedPlayers } = body;
				this.setState({players: matchedPlayers, queried: true});
			}
		}
		catch (e) {
			console.log(e);
			return []
		}
	}

	render() {
		const { query, players, queried } = this.state;
		console.log(this.state);
		return(
			<div>
				<ContentHeader>
					<div>
						<HeaderText style={{fontSize: '3rem'}}>Highly Unfinished Component</HeaderText>
					</div>
				</ContentHeader>
				<ContentBody>
					<FieldContainer style={{flexDirection: 'column'}}>
						<FormHeaderContainer>
							<FormHeader>
								Search Players
							</FormHeader>
						</FormHeaderContainer>
						<StyledForm
							onSubmit={this.requestMatchingPlayers}
						>
							<InputWrapper>
								<FormLabel htmlFor="query">Search:</FormLabel>
								<StyledTextInput name="query" placeholder="Player tag..." value={query} onChange={e => this.setState({[e.target.name]: e.target.value})}/>
							</InputWrapper>
							<Button
								style={{marginLeft: '2rem', border: 'none'}}
							>
								Search
							</Button>
						</StyledForm>
					</FieldContainer>
					{queried ? <PlayerSearchResults results={players} /> : null}
				</ContentBody>
			</div>
		)
	}
}

export default PlayerRoot;