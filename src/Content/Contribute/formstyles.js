import styled from 'styled-components';

export const InputDropWrapper = styled.div`
	width: 10rem;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	background-color: ${({theme}) => theme.palette.primary[0]};
	color: ${({theme}) => theme.palette.offwhite};
	padding: 0.5rem;
	border-radius: 0.3rem;
`

export const InputDropInput = styled.input`
	background-color: ${({theme}) => theme.palette.offwhite};
	color: ${({theme}) => theme.palette.primary[1]};
	border: 1px solid ${({theme}) => theme.palette.primary[2]};
	height: 1.5rem;
	font-size: 1rem;
`

export const InputDropContainer = styled.ul`
	font-size: 0.9rem;
`

export const InputDropSelection = styled.li`
	background-color: ${({theme}) => theme.palette.offwhite};
	color: ${({theme}) => theme.palette.primary[1]};
	height: 1.3rem;
	padding: 0.2rem;
	border: 1px solid ${({theme}) => theme.palette.primary[2]};
	border-top: none;
	cursor: pointer;

	&.selected {
		background-color: ${({theme}) => theme.palette.focused};
		color: ${({theme}) => theme.palette.offblack};
	}
`