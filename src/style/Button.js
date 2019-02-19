import styled from 'styled-components';

const Button = styled.button`
	font-size: 0.9rem;
	line-height: 1;
	cursor: pointer;
	text-align: center;
	text-decoration: none;
	padding: 0.7rem 1.4rem;
	margin: 0;
	display: inline-block;
	background-color: ${({theme}) => theme.palette.accent[0]};
	color: ${({theme}) => theme.palette.offwhite};
	border: 2px solid ${({theme}) => theme.palette.accent[0]};
	border-radius: 0.6rem;
	transition: all 0.2s ease-in-out;

	&:focus,
	&:hover {
		background-color: ${({theme}) => theme.palette.accent[1]};
		outline: none;
		box-shadow: 0 0 0 2px ${({theme}) => theme.palette.focused};
	}

	&:active {
		background-color: ${({theme}) => theme.palette.accent[2]};
		transform: scale(0.99);
	}

	&.secondary-button {
		background-color: ${({theme}) => theme.palette.primary[4]};
		color: ${({theme}) => theme.palette.primary[0]};
		border: 2px solid ${({theme}) => theme.palette.primary[0]};
	}
	&.secondary-button:focus,
	&.secondary-button:hover {
		background-color: ${({theme}) => theme.palette.primary[3]};
	}
`

export default Button;