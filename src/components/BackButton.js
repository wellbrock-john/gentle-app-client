import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default class BackButton extends Component {
	render() {
		return (
			<>
				<Link to={"/home"}>
					<button className="back-button">
						<span>Home</span>
					</button>
				</Link>
			</>
		);
	}
}
