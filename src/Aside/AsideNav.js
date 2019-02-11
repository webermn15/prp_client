import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink, Aside, AsideNavAnchor, ExpandCollapseButton, ExpandCollapseContent, StyledSvgLogo } from '../style';


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
				<div style={{margin: '2rem auto', height: '4rem', width: '4rem'}}>
					<NavLink to='/' >
						<StyledSvgLogo className='svg-icon'/>
					</NavLink>
				</div>
				<nav style={{width: '90%', margin: '0 auto'}}>
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
						to="/players"
					>
						<span>Players</span>
					</AsideNavAnchor>
					<AsideNavAnchor
						to="/contribute"
					>
						<span>Contribute</span>
					</AsideNavAnchor>
				</nav>
			</Aside>
		)
	}
}

export default AsideNav;

AsideNav.propTypes = {
	gamesInfo: PropTypes.array
}