import styled from 'styled-components';

export const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	padding: 0 1rem;
	margin: 0 1rem;
	background-color: ${({theme}) => theme.palette.primary[0]};
	border-radius: 0.3rem;
`

export const FieldContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	background-color: ${({theme}) => theme.palette.primary[1]};
	color: ${({theme}) => theme.palette.offwhite};
	padding: 1rem 0;
	margin-top: 1rem;
	border-radius: 0.3rem;
`

export const InputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	flex-grow: 1;
	margin-left: 1rem;
`

export const FieldTextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	flex-grow: 1;
	margin: 0 1rem;
`

export const InputDropInput = styled.input`
	background-color: ${({theme}) => theme.palette.offwhite};
	color: ${({theme}) => theme.palette.primary[1]};
	border: 1px solid ${({theme}) => theme.palette.primary[2]};
	border-radius: 0.2rem;
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