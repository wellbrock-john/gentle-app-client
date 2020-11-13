import React, { Component } from "react";
import { Link } from "react-router-dom";

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
					<div className="login-div">
						<form className="login-form">
							<div>
								<label for="username">Username</label>
								<input type="text" name="username" id="username" />
							</div>
							<div>
								<label for="password">Password</label>
								<input type="password" name="password" id="password" />
							</div>
							<Link to={"/positivestatement"}>
								<button>
									<span>Login</span>
								</button>
							</Link>
						</form>
					</div>
				</section>
			</>
		);
	}
}

export default LoginPage;
