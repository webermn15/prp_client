import { createGlobalStyle } from 'styled-components';

// import shared components to be exported
import NavLink from './NavLink';

// define theme variables
const theme = {
	palette: {
		primary: ['#142543', '#4e6692', '#98a3b7'],
		accent: '#de5253',
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
		table: 'Robot Condensed, Helvetica, sans-serif'
	}
}

// inject global styles to be imported to root
const GlobalStyle = createGlobalStyle`
	body, html {
		margin: 0;
		font-family: ${theme.fonts.primary};
	}
`

export {
	theme,
	GlobalStyle,
	NavLink
}