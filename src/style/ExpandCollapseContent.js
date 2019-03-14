import styled from 'styled-components';

const ExpandCollapseContent = styled.div`
	width: 100%;
	display: none;
	text-align: left;
	margin: 0 auto;
	background-color: ${({theme}) => theme.palette.offwhite};
	border-bottom: 1px solid ${({theme}) => theme.palette.primary[0]};
`

export default ExpandCollapseContent;