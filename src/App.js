import React, { Component } from "react";
import { Route } from "react-router-dom";
import TokenService from "../src/services/token-service";
import "./App.css";
import HomePage from "./components/routes/Home/Home";
import LandingPage from "./components/routes/Landing/Landing";
import LoginPage from "./components/routes/Login/Login";
import Notes from "./components/routes/Notes/Notes";
import PositiveStatement from "./components/routes/PositiveStatement/PositiveStatement";
import SignUp from "./components/routes/Signup/Signup";
import Treasure from "./components/routes/Treasure/Treasure";
import Vent from "./components/routes/Vent/Vent";
import Context from "./Context";

const { API_ENDPOINT } = require("./config");

class App extends Component {
	state = {
		showPositiveStatements: false,
		positivestatements: [],
		notes: [],
		addNote: (newNote) => {
			return this.setState({ notes: [...this.state.notes, newNote] });
		},
		addPositiveStatement: (newPositiveStatement) => {
			return this.setState({
				positivestatements: [
					...this.state.positivestatements,
					newPositiveStatement,
				],
			});
		},
		handleToggleClick: () => {
			this.setState({
				showPositiveStatements: !this.state.showPositiveStatements,
			});
		},
		deleteNote: (noteId) => {
			return this.setState({
				notes: this.state.notes.filter((note) => note.note_id !== noteId),
			});
		},
		deletePositiveStatements: () => {
			return this.setState({
				positivestatements: [],
			});
		},
		logout: () => {
			this.setState({
				positivestatements: [],
				notes: [],
				showPositiveStatements: false,
			});
		},
	};

	componentDidMount() {
		const options = {
			method: "GET",
			headers: {
				Authorization: `Bearer ${TokenService.getAuthToken()}`,
				Accept: "application/json",
			},
		};
		fetch(`${API_ENDPOINT}/api/notes`, options)
			.then((res) => {
				if (!res.ok) {
					return Promise.reject(res.statusText);
				}
				return res.json();
			})
			.then((notes) => this.setState({ notes }));

		fetch(`${API_ENDPOINT}/api/positivestatements`, options)
			.then((res) => {
				if (!res.ok) {
					return Promise.reject(res.statusText);
				}
				return res.json();
			})
			.then((positivestatements) => {
				this.setState({ positivestatements });
			});
	}

	render() {
		return (
			<Context.Provider value={this.state}>
				<div className="App">
					<main className="App-main">
						<Route exact path="/" component={LandingPage} />
						<Route path="/home" component={HomePage} />
						<Route path="/login" component={LoginPage} />
						<Route path="/signup" component={SignUp} />
						<Route path="/treasure" component={Treasure} />
						<Route path="/notes" component={Notes} />
						<Route path="/positivestatements" component={PositiveStatement} />
						<Route path="/vent" component={Vent} />
					</main>
					<br />
					<br />
					<footer role="contentinfo" className="footer">
						<a className="footer-link" href="mailto:wellbrock23john@gmail.com">
							Email
						</a>{" "}
						|{" "}
						<a
							className="footer-link"
							href="https://github.com/wellbrock-john"
							target="blank"
						>
							Github
						</a>{" "}
						|{" "}
						<a
							className="footer-link"
							href="https://linkedin.com/in/john-wellbrock"
							target="blank"
						>
							LinkedIn
						</a>
						<div>
							<small>
								Copyright &copy; 2020 John Wellbrock. All Rights Reserved
							</small>
						</div>
					</footer>
				</div>
			</Context.Provider>
		);
	}
}

export default App;
