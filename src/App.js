import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { AnimatePresence } from 'framer-motion';
/*
██╗      █████╗ ██╗   ██╗ ██████╗ ██╗   ██╗████████╗       ██╗   
██║     ██╔══██╗╚██╗ ██╔╝██╔═══██╗██║   ██║╚══██╔══╝       ██║   
██║     ███████║ ╚████╔╝ ██║   ██║██║   ██║   ██║       ████████╗
██║     ██╔══██║  ╚██╔╝  ██║   ██║██║   ██║   ██║       ██╔═██╔═╝
███████╗██║  ██║   ██║   ╚██████╔╝╚██████╔╝   ██║       ██████║  
╚══════╝╚═╝  ╚═╝   ╚═╝    ╚═════╝  ╚═════╝    ╚═╝       ╚═════╝  

██████╗  █████╗  ██████╗ ███████╗███████╗                        
██╔══██╗██╔══██╗██╔════╝ ██╔════╝██╔════╝                        
██████╔╝███████║██║  ███╗█████╗  ███████╗                        
██╔═══╝ ██╔══██║██║   ██║██╔══╝  ╚════██║                        
██║     ██║  ██║╚██████╔╝███████╗███████║                        
╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚══════╝                        
*/
import Index from './pages/Index';
import Detail from './pages/Detail';
import Layout from './components/Layout';

const history = createBrowserHistory();

const OpenRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={(props) => (
			<Layout>
				<Component {...props} />
			</Layout>
		)}
	/>
);

function App() {
	const location = useLocation();
	return (
		<AnimatePresence exitBeforeEnter>
			<Switch key={location.pathname} location={location}>
				<OpenRoute history={history} exact path="/" component={Index} />
				<OpenRoute
					history={history}
					path="/noticia/:title"
					component={Detail}
				/>
			</Switch>
		</AnimatePresence>
	);
}

export default App;
