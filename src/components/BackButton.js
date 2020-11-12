import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";

export default class BackButton extends Component {
	render() {
		return (
			<>
				<Link to={"/"}>
					<button className="back-button">
						<span>Home</span>
					</button>
				</Link>
			</>
		);
	}
}
