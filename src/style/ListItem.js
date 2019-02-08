import styled from 'styled-components';

const ListItem = styled.li`
	padding: 0.2rem;
	transition: background-color 0.1s ease-in-out;
	border-bottom: 1px ${({theme}) => theme.palette.primary[2]} solid;

	&:hover {
		background-color: ${({theme}) => theme.palette.primary[3]}
	}
`

export default ListItem;