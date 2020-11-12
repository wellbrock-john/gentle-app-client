import React, { Component } from "react";
import BackButton from "../BackButton";

class Notes extends Component {
	render() {
		return (
			<>
				<header role="banner">
					<BackButton />
					<h1>Talking Points</h1>
					<h3>
						Allow yourself to feel free of cluttered thoughts. If something is
						bothering you, you can note it here. Then, bring it up in your next
						therapy session.
					</h3>
				</header>
				<section>
					<form class="signup-form">
						<section class="form-section">
							<header>
								<h3>A Gentle Reminder</h3>
							</header>
							<label for="gentle-reminder">I would like to talk about...</label>
							<textarea name="gentle-reminder" rows="15" required></textarea>
						</section>
						<button type="submit">Save</button>
					</form>
				</section>
			</>
		);
	}
}

export default Notes;
