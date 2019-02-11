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
	border-top: 1px solid ${({theme}) => theme.palette.primary[2]};
	border-bottom: 1px solid ${({theme}) => theme.palette.primary[2]};
	background-color: ${({theme}) => theme.palette.offwhite};
	color: ${({theme}) => theme.palette.primary[1]};

	&:hover,
	&:active {
		background-color: ${({theme}) => theme.palette.primary[3]};
	}

	&.expanded {
		background-color: ${({theme}) => theme.palette.primary[3]};
	}
`

export default ExpandCollapseButton;