import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { NavLink, Button, Aside, AsideNavAnchor, ExpandCollapseButton, ExpandCollapseContent } from '../style';

import SiteLogo from './SiteLogo';

const NavigationContainer = styled.nav`
	width: 90%;
	margin: 0 auto;
	padding: 0.6rem;
	border-radius: 0.6rem;
	background-color: ${({theme}) => theme.palette.primary[1]}
`

const SearchForm = styled.form`
	background-color: ${({theme}) => theme.palette.offwhite};
	border-radius: 0.3rem;
	margin-bottom: 0.6rem;
`

const StyledSearchInput = styled.input`
  padding: 0.6rem;
  margin: 0.3rem 0;
  border-radius: 0.3rem;
  border: 1px solid ${({theme}) => theme.palette.primary[0]};

  &:focus {
    box-shadow: 0 0 0 2px ${({theme}) => theme.palette.focused};
    outline: none;
  }
`

const SearchButton = styled(Button)`
	border: none;
	margin-bottom: 0.3rem;
`

class AsideNav extends Component {
	constructor(props) {
		super(props)
		this.state = {
			expand: false
		}
	}

	expandCollapse = () => {
		this.setState({expand: !this.state.expand});
	}

	render() {
		return(
			<Aside>
				<SiteLogo/>
				<NavigationContainer>
					<SearchForm>
						<StyledSearchInput name="search" placeholder="Search..." />
						<SearchButton>Search</SearchButton>
					</SearchForm>
					<ExpandCollapseButton
						style={{fontWeight: '700'}}
						className={this.state.expand ? 'expanded' : null}
						onClick={() => this.expandCollapse()}
					>
						<span>Games</span><span style={{width: '1rem', textAlign: 'center'}}>{this.state.expand ? '-' : '+'}</span>
					</ExpandCollapseButton>
					<ExpandCollapseContent style={{display: this.state.expand ? 'block' : 'none'}}>
						<ul>
							{
								(this.props.gamesInfo.length > 0) && (
									this.props.gamesInfo.map(game => {
										return( 
											<li 
												key={game.game_id}
												style={{padding: '0.2rem'}}
											>
												<NavLink 
													style={{fontFamily: 'Roboto', fontSize: '0.8rem'}}
													onClick={() => this.expandCollapse()}
													to={{pathname:`/${game.game_alias}`}}
												>
													{game.game_name}
												</NavLink>
												<br/>
											</li>
										)
									})
								)
							}
						</ul>
					</ExpandCollapseContent>
					<AsideNavAnchor
						style={{margin: '0.6rem 0'}}
						to="/players"
					>
						<span>Players</span>
					</AsideNavAnchor>
					<AsideNavAnchor
						to="/contribute"
					>
						<span>Contribute</span>
					</AsideNavAnchor>
				</NavigationContainer>
			</Aside>
		)
	}
}

export default AsideNav;

AsideNav.propTypes = {
	gamesInfo: PropTypes.array
}