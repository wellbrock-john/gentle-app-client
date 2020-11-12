import React, { Component } from "react";

class PositiveStatement extends Component {
	render() {
		return (
			<>
				<header role="banner">
					<h1>Welcome</h1>
					<h3>Let's begin with a gentle, positive step forward.</h3>
				</header>
				<section>
					<form class="signup-form">
						<section class="form-section">
							<header>
								<h3>Write something positive about you.</h3>
							</header>
							<label for="self-love-statement">I love...</label>
							<textarea
								name="self-love-statement"
								rows="15"
								minlength="200"
								required
							></textarea>
						</section>
						<button type="submit">Submit</button>
					</form>
				</section>
			</>
		);
	}
}

export default PositiveStatement;
