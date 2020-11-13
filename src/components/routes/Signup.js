import React, { Component } from "react";
import { Link } from "react-router-dom";

class SignUp extends Component {
	render() {
		return (
			<>
				<header>
					<h3>You deserve a safe space</h3>
					<h4>Come sign up for one below</h4>
				</header>
				<section>
					<div className="signup-div">
						<form class="signup-form">
							<div>
								<label for="first-name">First name</label>
								<input
									placeholder="First Name"
									type="text"
									name="first-name"
									id="first-name"
								/>
							</div>
							<div>
								<label for="last-name">Last name</label>
								<input
									type="text"
									name="last-name"
									id="last-name"
									placeholder="Last Name"
								/>
							</div>
							<div>
								<label for="username">Email</label>
								<input type="text" name="username" id="username" />
							</div>
							<div>
								<label for="password">Password</label>
								<input type="password" name="password" id="password" />
							</div>
							<Link to={"/positivestatement"}>
								<button type="submit">Sign Up</button>
							</Link>
						</form>
					</div>
				</section>
			</>
		);
	}
}

export default SignUp;
