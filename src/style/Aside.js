import styled from 'styled-components';

const Aside = styled.aside`
	height: 100%;
	min-width: 20%;
	max-width: 20%;
	text-align: center;
	background-color: ${({theme}) => theme.palette.primary[0]};
`

export default Aside;