import { React } from 'preact'
import { Router } from 'preact-router';

// Code-splitting is automated for routes
import Home from '../routes/home';
import Profile from '../routes/privacy';
import { Container } from 'semantic-ui-react'
import TemporusHeader from './header'

function App() {
	let currentUrl;

	function handleRoute(e) {
		return currentUrl = e.url;
	}

	return (
		<div id="app">
			<link rel="stylesheet" href="//fonts.googleapis.com/css?family=Fira+Code" />
			<Container>
				<TemporusHeader />
				<Router onChange={handleRoute}>
					<Home path="/" />
					<Profile path="/privacy/" />
				</Router>
			</Container>
		</div>
	);
}

export default App;
