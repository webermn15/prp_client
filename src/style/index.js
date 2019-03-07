import { createGlobalStyle } from 'styled-components';

// import shared components to be exported
// links and navigation
import NavLink from './NavLink';
import StyledActiveNavLink from './StyledActiveNavLink';
import BreadCrumbs from './BreadCrumbs';
import Button from './Button';

// sidebar content and navigation
import AlphabeticBrowse from './AlphabeticBrowse';
import Aside from './Aside';
import AsideNavAnchor from './AsideNavAnchor';
import ExpandCollapseButton from './ExpandCollapseButton';
import ExpandCollapseContent from './ExpandCollapseContent';

// element headers and containers
import HeaderText from './HeaderText';
import SubHeaderText from './SubHeaderText';
import SubSubHeaderText from './SubSubHeaderText';

import ContentWrapper from './ContentWrapper';
import ContentMain from './ContentMain';
import ContentHeader from './ContentHeader';
import ContentBody from './ContentBody';
import SectionMain from './SectionMain';

import { TableRow, TableCell, TableCellFirst, TableCellLast } from './Table';

// lists and items
import UnorderedList from './UnorderedList';
import ListItem from './ListItem';
import RankingCard from './RankingCard';

// miscellaneous- icons, modals, etc
import StyledSvgLogo from './StyledSvgLogo';
import { SvgButtonContainer, WarningIcon, AddIcon, RemoveIcon, ArrowUp, ArrowDown } from './SvgIcons';
import { ModalOverlay, ModalContent } from './Modal';
import LoadingSvg from './LoadingIcon';

// define theme variables
const theme = {
	palette: {
		primary: ['#142543', '#4e6692', '#98a3b7', '#e6e8eb', '#f0f2f5'],
		accent: ['#de5253', '#c04749', '#efa9a9'],
		focused: '#fbc251',
		positive: '#28a745',
		negative: '#dc3545',
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
	* {
		box-sizing: border-box;
	}
	body, html {
		padding: 0;
		margin: 0;
		height: 100%;
		display: flex;
		flex-direction: column;
		font-family: ${theme.fonts.primary};
		color: ${theme.palette.primary[0]};
		background-color: ${theme.palette.primary[3]};
		font-smoothing: subpixel-antialiased;
		text-shadow: 1px 1px 1px rgba(0,0,0,0.004);
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
	ContentWrapper,
	ContentMain,
	ContentHeader,
	ContentBody,
	SectionMain,
	AlphabeticBrowse,
	Aside,
	AsideNavAnchor,
	UnorderedList,
	ListItem,
	RankingCard,
	TableRow,
	TableCell,
	TableCellFirst,
	TableCellLast,
	ExpandCollapseButton,
	ExpandCollapseContent,
	StyledSvgLogo,
	ModalOverlay,
	ModalContent,
	LoadingSvg,
	SvgButtonContainer,
	WarningIcon,
	AddIcon,
	RemoveIcon,
	ArrowUp,
	ArrowDown
}