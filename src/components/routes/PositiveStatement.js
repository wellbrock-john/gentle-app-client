import React, { Component } from "react";
import { Link } from "react-router-dom";

class PositiveStatement extends Component {
	render() {
		return (
			<>
				<header role="banner">
					<h1>Welcome</h1>
					<h3>Let's begin with a gentle, positive step forward.</h3>
				</header>
				<section>
					<div className="positive-statement-div">
						<form className="positive-statement-form">
							<div class="form-section">
								<header>
									<h3>Write something positive about you.</h3>
								</header>
								<label for="self-love-statement"></label>
								<textarea
									name="self-love-statement"
									rows="15"
									minlength="200"
									required
								></textarea>
							</div>
							<Link to={"/home"}>
								<button>
									<span>Treasure It</span>
								</button>
							</Link>
						</form>
					</div>
				</section>
			</>
		);
	}
}

export default PositiveStatement;
