import { Router } from 'preact-router';

// Code-splitting is automated for routes
import Home from '../routes/home';
import Profile from '../routes/privacy';

function App() {
	let currentUrl;

	function handleRoute(e) {
		return currentUrl = e.url;
	}

	return (
		<div id="app">
			<Router onChange={handleRoute}>
				<Home path="/" />
				<Profile path="/privacy/" />
			</Router>
		</div>
	);
}

export default App;
