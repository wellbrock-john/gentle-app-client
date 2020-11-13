import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/routes/Home";
import LandingPage from "./components/routes/Landing";
import LoginPage from "./components/routes/Login";
import SignUp from "./components/routes/Signup";
import Treasure from "./components/routes/Treasure";
import Notes from "./components/routes/Notes";
import PositiveStatement from "./components/routes/PositiveStatement";
import Vent from "./components/routes/Vent";

class App extends Component {
	state = {
		b: true,
	};
	render() {
		return (
			<div className="App">
				<Route exact path="/" render={() => <LandingPage />} />
				<Route exact path="/home" render={() => <HomePage />} />
				<Route exact path="/app" render={() => <LandingPage />} />
				<Route exact path="/login" render={() => <LoginPage />} />
				<Route exact path="/signup" render={() => <SignUp />} />
				<Route exact path="/treasure" render={() => <Treasure />} />
				<Route exact path="/notes" render={() => <Notes />} />
				<Route
					exact
					path="/positivestatement"
					render={() => <PositiveStatement />}
				/>
				<Route exact path="/vent" render={() => <Vent />} />
			</div>
		);
	}
}

export default App;
