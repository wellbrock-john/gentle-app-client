import React, { Component } from "react";

class LoginPage extends Component {
	render() {
		return (
			<>
				<header role="banner">
					<h1>Hello Friend,</h1>
				</header>
				<section>
					<header>
						<h3>Please Log In When You Are Ready</h3>
					</header>
					<form class="signup-form">
						<div>
							<label for="username">Email</label>
							<input type="text" name="username" id="username" />
						</div>
						<div>
							<label for="password">Password</label>
							<input type="password" name="password" id="password" />
						</div>
						<button type="submit">Login</button>
					</form>
				</section>
			</>
		);
	}
}

export default LoginPage;
