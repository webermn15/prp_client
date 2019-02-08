import styled from 'styled-components';

const UnorderedList = styled.ul`
	margin: 0.6rem;
	border-top: 1px ${({theme}) => theme.palette.primary[2]} solid;
	border-left: 1px ${({theme}) => theme.palette.primary[2]} solid;
	border-right: 1px ${({theme}) => theme.palette.primary[2]} solid;
`

export default UnorderedList;