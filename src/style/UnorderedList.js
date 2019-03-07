import styled from 'styled-components';

const UnorderedList = styled.ul`
	display: inline-flex;
	flex-direction: column;
	justify-content: flex-start;
	margin: 0.6rem 0.6rem 0.6rem 0;
	border-top: 1px solid ${({theme}) => theme.palette.primary[0]};
`

export default UnorderedList;