import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ModalOverlay, ModalContent, Button, HeaderText, SubHeaderText, SubSubHeaderText, WarningIcon } from '../../../../style';
import { WarningText } from '../formstyles';

import defaultSsbmHeader from '../../../../../dist/static/ssbmfodheader.jpg';

import PreviewRankingTable from './PreviewRankingTable';
import Submitting from './Submitting';

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

const PreviewButtonContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	margin-top: 4rem;
`

const PreviewWarningText = styled(WarningText)`
	background-color: ${({theme}) => theme.palette.primary[0]};
	margin: 0 auto;
	padding: 0 1rem;
	border-radius: 0.6rem;
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
		const { preview, handleClose, handleSubmit, warning, submitting, success } = this.props;
		const { game, region, title, detail, ranks } = preview;
		return(
			<ModalOverlay>
				<ModalContent>
					{submitting ? 
					success ?
						(<Submitting><SubHeaderText>Ranking successfully submitted!</SubHeaderText><p>Redirecting...</p></Submitting>)
						:
						(<Submitting><SubHeaderText>Submitting ranking...</SubHeaderText></Submitting>)
					:
					(<div>
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
						<PreviewButtonContainer>
							{warning ? (<PreviewWarningText><WarningIcon className="svg-icon" /><span>{warning}</span></PreviewWarningText>) : null}
							<div>
								<Button
									className="preview secondary-button"
									onClick={handleClose}
								>
									Close Preview
								</Button>
								<Button
									style={{marginLeft: '1rem'}}
									className="preview"
									onClick={handleSubmit}
								>
									Submit
								</Button>
							</div>
						</PreviewButtonContainer>
					</div>)
					}
				</ModalContent>
			</ModalOverlay>
		)
	}
}

export default PreviewModal;

PreviewModal.propTypes = {
	handleClose: PropTypes.func,
	handleSubmit: PropTypes.func,
	preview: PropTypes.object,
	warning: PropTypes.string,
	submitting: PropTypes.bool,
	success: PropTypes.bool
}