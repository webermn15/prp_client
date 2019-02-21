import styled from 'styled-components';

const ContentBody = styled.div`
	padding: 0.6rem;
	border-top: 0.3rem solid ${({theme}) => theme.palette.primary[0]};
	border-radius: 0.6rem 0.6rem 0 0;
`

export default ContentBody;