import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthAPIService from "../../../services/auth-api-service";

class SignUp extends Component {
	state = {
		error: null,
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const { full_name, username, email, password, confirmPassword } = e.target;
		this.setState({ error: null });
		if (password.value !== confirmPassword.value) {
			return this.setState({
				error: "Whoops, those passwords do not match. Please try again.",
			});
		}
		AuthAPIService.postUser({
			full_name: full_name.value,
			username: username.value,
			email: email.value,
			password: password.value,
		})
			.then(() => {
				this.props.history.push("/login");
			})
			.catch((res) => {
				this.setState({ error: res.error });
			});
	};
	render() {
		return (
			<>
				<header>
					<h3>You deserve a safe space</h3>
					<h4>Come sign up for one below</h4>
				</header>
				<section>
					<div className="signup-div">
						<form
							className="signup-form"
							aria-label="signup-form"
							onSubmit={this.handleSubmit}
						>
							{this.state.error && <p className="error">{this.state.error}</p>}
							<fieldset aria-label="full_name">
								<div>
									<input
										placeholder="First and Last Name"
										type="text"
										name="full_name"
										id="full_name"
										required
									/>
								</div>
							</fieldset>
							<fieldset aria-label="email">
								<div>
									<input
										type="email"
										placeholder="Email"
										name="email"
										id="email"
										required
									/>
								</div>
							</fieldset>
							<fieldset aria-label="username">
								<div>
									<input
										type="text"
										placeholder="Username"
										name="username"
										id="username"
										required
									/>
								</div>
							</fieldset>
							<fieldset aria-label="password">
								<div>
									<input
										type="password"
										name="password"
										id="password"
										placeholder="Password"
										required
									/>
								</div>
							</fieldset>
							<fieldset
								htmlFor="confirm-password"
								aria-label="confirm-password"
							>
								<div>
									<input
										type="password"
										name="confirmPassword"
										id="confirm-password"
										placeholder="Confirm Password"
										required
									/>
								</div>
							</fieldset>
							<fieldset aria-label="signup">
								<button
									className="signup-btn"
									type="submit"
									aria-label="signup"
								>
									<span>Sign Up</span>
								</button>
							</fieldset>
							<div>
								<p className="login-re-route">
									If you have an account already please login here:
								</p>
								<Link to={"/login"}>
									<button>
										<span>Login</span>
									</button>
								</Link>
							</div>
						</form>
					</div>
				</section>
			</>
		);
	}
}

export default SignUp;
