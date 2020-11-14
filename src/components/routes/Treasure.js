import React, { Component } from "react";
import BackButton from "../BackButton";
import LogoutButton from "../LogoutButton";

class Treasure extends Component {
	//add state with value called isOpened
	render() {
		//write a func that returns a template with an if statement
		//write a func called changed touch that with change state to true
		return (
			<>
				<header role="banner">
					<BackButton />
					<LogoutButton />
					<h1>Gentle</h1>
					<h2>Feel safe. Be you.</h2>
				</header>
				<section>
					<header>
						<h3>
							The love we give ourselves, amplifies the love we can give to
							others.
						</h3>
						<h4>The love you have for yourself wants to be seen!</h4>
						<h5>Click the icon below</h5>
					</header>
					<button>This will be a treasure icon</button>
				</section>
				<section>
					<div id="treasures-element">
						<p>
							This list will only populate the page after the button is clicked.
						</p>
						<ul>
							<li>Statement One</li>
							<li>Statement Two</li>
							<li>Statement Three</li>
							<li>Statement Four</li>
							<li>Statement Five</li>
							<li>Statement Six</li>
							<li>Statement Seven</li>
						</ul>
					</div>
				</section>
			</>
		);
	}
}

export default Treasure;
