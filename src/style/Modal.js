import styled from 'styled-components';

export const ModalOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	z-index: 99;
	margin: 0;
	padding-top: 5vh;
	background-color: rgba(0, 0, 0, 0.2);
`

export const ModalContent = styled.div`
	display: relative;
	z-index: 100;
	width: 50rem;
	max-height: 90vh;
	display: flow-root;
	background-color: ${({theme}) => theme.palette.offwhite};
	border: 2px solid ${({theme}) => theme.palette.primary[0]};
	border-radius: 0.6rem;
	margin: 0 auto;
	padding: 1rem;
	overflow-y: scroll;
	scrollbar-width: none;
	-ms-overflow-style: none;

	&::-webkit-scrollbar {
		width: 0;
		height: 0;
	}
`