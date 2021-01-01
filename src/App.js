import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Deck from "./pages/Deck";
import routersComponents from './consts/routersComponents';

const routers = routersComponents.map((route, index) => (
	<Route key={index} path={route.point} component={route.component}/>
));

function App() {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route exact path="/">
						<Home />
						{/* <Deck /> */}
					</Route>
					<Route path="/portfolio">
						<Deck />
					</Route>
					{routers}
				</Switch>
			</div>
		</Router>
	);
}

export default App;
