import styled from 'styled-components';

const ContentHeader = styled.div`
	position: relative;
	background-color: ${({theme}) => theme.palette.primary[1]};
	background-image: url(${props => props.url});
	background-position: center;
	padding: 1rem;
	margin-bottom: 1rem;
	border-radius: 1rem;

	& h1,
	& h2,
	& h3 {
		text-shadow: 2px 2px 4px ${({theme}) => theme.palette.offwhite};
	}

	& > div {
		position: relative;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		background: linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);
		padding: 0.5rem;
		border-radius: 0.6rem;
	}
`

export default ContentHeader;