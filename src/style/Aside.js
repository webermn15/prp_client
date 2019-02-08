import styled from 'styled-components';

const Aside = styled.aside`
	height: 100%;
	width: 20%;
	border-right: ${({theme}) => theme.palette.primary[2]};
`

export default Aside;