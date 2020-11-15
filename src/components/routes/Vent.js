import React, { Component } from "react";
import BackButton from "../BackButton";
import LogoutButton from "../LogoutButton";

class Vent extends Component {

	state = {
		text: "",
	};

	handleReset = (e) => {
		this.setState({
			text: "",
		})
	}

	updateText = (inputText) => {
		this.setState({
			text: inputText,
		})
	}

	render() {
		return (
			<>
				<header role="banner">
					<BackButton />
					<LogoutButton />
					<h1>Vent it out.</h1>
					<h3>Then, let it go.</h3>
				</header>
				<section>
					<form className="vent-form" aria-label="vent-form" onSubmit={(e) => this.handleReset(e)}>
						<section className="form-section">
							<header>
								<h3>
									Remind yourself that you are safe. Allow yourself to feel
									freely.
								</h3>
							</header>
							<label htmlFor="vent-it"></label>
							<textarea name="vent-it" rows="15" required onChange={(e) => this.updateText(e.target.value)}></textarea>
						</section>
						<button type="submit" aria-label="vent-button">Release</button>
					</form>
				</section>
			</>
		);
	}
}

export default Vent;
