import React, { Component } from "react";
import BackButton from "../BackButton";

class Vent extends Component {
	render() {
		return (
			<>
				<header role="banner">
					<BackButton />
					<h1>Vent it out.</h1>
					<h3>Then, let it go.</h3>
				</header>
				<section>
					<form class="signup-form">
						<section class="form-section">
							<header>
								<h3>
									Remind yourself that you are safe. Allow yourself to feel
									freely.
								</h3>
							</header>
							<label for="vent-it">I feel...</label>
							<textarea name="vent-it" rows="15" required></textarea>
						</section>
						<button type="submit">Release</button>
					</form>
				</section>
			</>
		);
	}
}

export default Vent;
