import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ModalOverlay, ModalContent, Button, HeaderText, SubHeaderText, SubSubHeaderText } from '../../../../style';
import defaultSsbmHeader from '../../../../../dist/static/ssbmfodheader.jpg';

import PreviewRankingTable from './PreviewRankingTable';

const PreviewHeader = styled.div`
	position: relative;
	background-image: url(${props => props.url});
	padding: 1rem;
	margin-bottom: 1rem;
	border-radius: 1rem;

	& h1,
	& h2,
	& h3 {
		text-shadow: 2px 2px 4px ${({theme}) => theme.palette.offwhite};
	}

	& > div {
		position: relative;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		background: linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);
		padding: 0.5rem;
		border-radius: 0.6rem;
	}
`

const PreviewDescription = styled.div`
	padding: 0.6rem;
	border-top: 0.3rem solid ${({theme}) => theme.palette.primary[0]};
	border-radius: 0.6rem 0.6rem 0 0;

	& h1,
	& h2,
	& h3,
	& h4 {
		margin: 0.5rem 0;
	}
	& p {
		margin: 0.3rem 0;
	}
`

class PreviewModal extends Component {
	constructor(props) {
		super(props)
		this.state = {
			focusable: null
		}
	}
	componentWillUnmount() {
		const focusable = document.querySelectorAll('a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select');
		for (let ele of focusable) {
			ele.setAttribute('tabindex', 0);
		}
	}
	render() {
		const { preview, handleClick } = this.props;
		const { game, region, title, detail, ranks } = preview;
		return(
			<ModalOverlay>
				<ModalContent>
					<div>
						<PreviewHeader url={defaultSsbmHeader}>
							<div>
								<HeaderText>{region.label}</HeaderText>
								<SubHeaderText>{title}</SubHeaderText>
								<SubSubHeaderText>{game.value.toUpperCase()}</SubSubHeaderText>
							</div>
						</PreviewHeader>
						<PreviewDescription
							dangerouslySetInnerHTML={{__html: detail.length > 0 ? detail : null}} 
						/>
						<PreviewRankingTable rankings={ranks} />
					</div>
					<Button
						style={{float: 'right'}}
						className="preview"
						onClick={handleClick}
					>
						Close Preview
					</Button>
				</ModalContent>
			</ModalOverlay>
		)
	}
}

export default PreviewModal;

PreviewModal.propTypes = {
	handleClick: PropTypes.func,
	preview: PropTypes.object
}