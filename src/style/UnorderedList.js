import styled from 'styled-components';

const UnorderedList = styled.ul`
	margin: 0.6rem 0.6rem 0.6rem 0;
	border-top: 1px solid ${({theme}) => theme.palette.primary[0]};
`

export default UnorderedList;