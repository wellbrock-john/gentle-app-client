import React, { Component } from "react";
import Context from "../../../Context";
import AuthAPIService from "../../../services/auth-api-service";
import TokenService from "../../../services/token-service";

class LoginPage extends Component {
	static contextType = Context;
	state = {
		error: null,
	};

	handleLogin = (e) => {
		e.preventDefault();
		const { username, password } = e.target;
		this.setState({ error: null });
		const user = { username: username.value, password: password.value };
		AuthAPIService.loginUser(user)
			.then((loginResponse) => {
				TokenService.saveAuthToken(loginResponse.authToken);
				this.props.history.push("/positivestatements");
			})
			.catch((res) => {
				this.setState({ error: res.error });
			});
	};

	render() {
		return (
			<>
				<section>
					<header role="banner">
						<h1 className="login-greeting">Hello Friend,</h1>
					</header>
					<section>
						<header>
							<h4>Let's Get You Into Your Space</h4>
						</header>
						<div className="login-div">
							<form
								className="login-form"
								aria-label="login-form"
								onSubmit={this.handleLogin}
							>
								{this.state.error && (
									<p className="error">{this.state.error}</p>
								)}
								<fieldset aria-label="username">
									<div>
										<label htmlFor="username">Username</label>
										<input
											type="text"
											placeholder="John Smith"
											name="username"
											id="username"
											required
										/>
									</div>
								</fieldset>
								<fieldset aria-label="password">
									<div>
										<label htmlFor="password">Password</label>
										<input
											type="password"
											placeholder="P@ssword1234"
											name="password"
											id="password"
											required
										/>
									</div>
								</fieldset>
								<fieldset aria-label="login">
									<button className="login" type="submit" aria-label="login">
										<span>Login</span>
									</button>
								</fieldset>
							</form>
						</div>
					</section>
				</section>
			</>
		);
	}
}

export default LoginPage;
