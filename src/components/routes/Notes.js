import React, { Component } from "react";
import BackButton from "../BackButton";
import LogoutButton from "../LogoutButton";

class Notes extends Component {
	render() {
		return (
			<>
				<header role="banner">
					<BackButton />
					<LogoutButton />
					<h1>Talking Points</h1>
					<h3>
						Allow yourself to feel free of cluttered thoughts. If something is
						bothering you, you can note it here. Then, bring it up in your next
						therapy session.
					</h3>
				</header>
				<section>
					<form className="signup-form">
						<section className="form-section">
							<header>
								<h3>A Gentle Reminder</h3>
							</header>
							<label htmlFor="gentle-reminder">
								I would like to talk about...
							</label>
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
