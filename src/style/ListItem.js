import styled from 'styled-components';

const ListItem = styled.li`
	min-width: 24rem;
	padding: 0.2rem;
	transition: background-color 0.1s ease-in-out;
	border-bottom: 1px solid ${({theme}) => theme.palette.primary[0]};

	&:hover {
		background-color: ${({theme}) => theme.palette.primary[4]}
	}
`

export default ListItem;