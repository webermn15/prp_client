import styled from 'styled-components';

const TableRow = styled.tr`
	padding: 0 0.2rem;
	transition: background-color 0.1s ease-in-out;
	border-bottom: 1px solid ${({theme}) => theme.palette.primary[2]};
	border-top: 1px solid ${({theme}) => theme.palette.primary[2]};

	&:hover {
		background-color: ${({theme}) => theme.palette.primary[3]}
	}
`

const TableCell = styled.td`
	padding: 0 1.6rem;
	text-align: center;
`

const TableCellFirst = styled(TableCell)`
	border-left: 1px solid ${({theme}) => theme.palette.primary[2]};
`

const TableCellLast = styled(TableCell)`
	padding: 0 2rem;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
`

export {
	TableRow,
	TableCell,
	TableCellFirst,
	TableCellLast
}