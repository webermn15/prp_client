import styled from 'styled-components';

const Button = styled.button`
	font-size: 0.9rem;
	line-height: 1;
	cursor: pointer;
	text-align: center;
	text-decoration: none;
	padding: 0.7rem 1.4rem;
	margin: 0;
	background-color: ${({theme}) => theme.palette.accent[0]};
	color: ${({theme}) => theme.palette.offwhite};
	display: inline-block;
	border: none;
	border-radius: 0.6rem;
	transition: all 0.2s ease-in-out;

	&:focus,
	&:hover {
		background-color: ${({theme}) => theme.palette.accent[1]};
	}

	&:active {
		background-color: ${({theme}) => theme.palette.accent[2]};
		transform: scale(0.99);
	}
`

export default Button;