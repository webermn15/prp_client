import styled from 'styled-components';

const ExpandCollapseButton = styled.button`
	width: 100%;
	font-size: 0.9rem;
	line-height: 1;
	cursor: pointer;
	text-align: left;
	text-decoration: none;
	padding: 0.7rem 0.2rem;
	margin: 0;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	border: none;
	border-bottom: 1px solid ${({theme}) => theme.palette.primary[0]};
	border-radius: 0.3rem;
	background-color: ${({theme}) => theme.palette.primary[1]};
	color: ${({theme}) => theme.palette.offwhite};

	&:hover,
	&:active {
		background-color: ${({theme}) => theme.palette.primary[4]};
	}

	&.expanded {
		background-color: ${({theme}) => theme.palette.primary[4]};
	}
`

export default ExpandCollapseButton;