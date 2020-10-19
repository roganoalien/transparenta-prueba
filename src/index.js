import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import WebFont from 'webfontloader';
import ScrollTop from './scrollTop';
import './tailwind.output.css';

WebFont.load({
	google: {
		families: ['Open Sans:300,400,700,800', 'sans-serif']
	}
});

const history = '';

ReactDOM.render(
	<BrowserRouter history={history}>
		<ScrollTop>
			<App />
		</ScrollTop>
	</BrowserRouter>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
