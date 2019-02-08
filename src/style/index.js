import { createGlobalStyle } from 'styled-components';

// import shared components to be exported
import NavLink from './NavLink';
import Button from './Button';
import HeaderText from './HeaderText';
import SubHeaderText from './SubHeaderText';
import ContentMain from './ContentMain';
import Aside from './Aside';
import UnorderedList from './UnorderedList';
import ListItem from './ListItem';

// define theme variables
const theme = {
	palette: {
		primary: ['#142543', '#4e6692', '#98a3b7', '#f0f2f5'],
		accent: ['#de5253', '#c04749', '#efa9a9'],
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
`

export {
	theme,
	GlobalStyle,
	NavLink,
	Button,
	HeaderText,
	ContentMain,
	Aside,
	UnorderedList,
	ListItem,
	SubHeaderText
}