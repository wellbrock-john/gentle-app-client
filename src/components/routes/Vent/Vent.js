import React, { Component } from "react";
import BackButton from "../../BackButton";
import LogoutButton from "../../LogoutButton";

import "./Vent.css";

class Vent extends Component {
	state = {
		text: "",
		show: false,
		class: "",
	};

	handleReset = (e) => {
		e.preventDefault();
		this.setState(
			{
				show: true,
			},
			() => {
				setTimeout(() => {
					this.setState({ class: "hide-opacity" });
				}, 100);
				setTimeout(() => {
					this.setState({
						show: false,
						text: "",
						class: "",
					});
				}, 5000);
			}
		);
	};

	updateText = (inputText) => {
		this.setState({
			text: inputText,
		});
	};

	render() {
		return (
			<>
				<header className="pages-header" role="banner">
					<BackButton />
					<LogoutButton />
					<h1 className="pages-h1">Vent It</h1>
					<h3 className="pages-h3">Then, let it go.</h3>
				</header>
				<section>
					<form
						className="vent-form"
						aria-label="vent-form"
						onSubmit={(e) => this.handleReset(e)}
					>
						<section className="form-section">
							<header>
								<p>
									Remind yourself that you are safe. Allow yourself to feel
									freely.
								</p>
							</header>
							<label htmlFor="vent-it"></label>
							{this.state.show ? (
								<h2 className={`vent-text ${this.state.class}`}>
									{this.state.text}
								</h2>
							) : (
								<textarea
									name="vent-it"
									rows="15"
									required
									onChange={(e) => this.updateText(e.target.value)}
									value={this.state.text}
								></textarea>
							)}
						</section>
						<section>
							<button type="submit" aria-label="vent-button">
								Release
							</button>
						</section>
					</form>
				</section>
			</>
		);
	}
}

export default Vent;
