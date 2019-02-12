import { createGlobalStyle } from 'styled-components';

// import shared components to be exported
import NavLink from './NavLink';
import StyledActiveNavLink from './StyledActiveNavLink';
import BreadCrumbs from './BreadCrumbs';
import Aside from './Aside';
import AsideNavAnchor from './AsideNavAnchor';
import Button from './Button';
import HeaderText from './HeaderText';
import SubHeaderText from './SubHeaderText';
import SubSubHeaderText from './SubSubHeaderText';
import ContentMain from './ContentMain';
import SectionMain from './SectionMain';
import UnorderedList from './UnorderedList';
import ListItem from './ListItem';
import { TableRow, TableCell, TableCellFirst, TableCellLast } from './Table';
import ExpandCollapseButton from './ExpandCollapseButton';
import ExpandCollapseContent from './ExpandCollapseContent';
import StyledSvgLogo from './StyledSvgLogo';

// define theme variables
const theme = {
	palette: {
		primary: ['#142543', '#4e6692', '#98a3b7', '#f0f2f5'],
		accent: ['#de5253', '#c04749', '#efa9a9'],
		focused: '#fbc251',
		background_base: '#eef1f6',
		offwhite: '#f7f7f7',
		offblack: '#2f2f2f',
		grayscale: [
			'#212121',
			'#414141',
			'#616161',
			'#9e9e9e',
			'#bdbdbd',
			'#e0e0e0',
			'#eeeeee',
			'#ffffff',
		]
	},
	fonts: {
		primary: 'Roboto, Helvetica, sans-serif',
		header: 'Oswald, Helvetica, sans-serif',
		table: 'Roboto Condensed, Helvetica, sans-serif'
	}
}

// inject global styles to be imported to root
const GlobalStyle = createGlobalStyle`
	body, html {
		padding: 0;
		margin: 0;
		height: 100%;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		font-family: ${theme.fonts.primary};
		color: ${theme.palette.offblack};
		background-color: ${theme.palette.background_base};
	}
	body > #app {
		flex-grow: 1;
		height: 100%;
	}
	ul, li {
		list-style: none;
		margin: 0;
		padding: 0;
	}
	*:focus {
		outline: 2px solid ${theme.palette.focused};
		outline-offset: 1px;
	}
`

export {
	theme,
	GlobalStyle,
	NavLink,
	BreadCrumbs,
	StyledActiveNavLink,
	Button,
	HeaderText,
	SubHeaderText,
	SubSubHeaderText,
	ContentMain,
	SectionMain,
	Aside,
	AsideNavAnchor,
	UnorderedList,
	ListItem,
	TableRow,
	TableCell,
	TableCellFirst,
	TableCellLast,
	ExpandCollapseButton,
	ExpandCollapseContent,
	StyledSvgLogo
}