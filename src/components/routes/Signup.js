import React, { Component } from "react";
import AuthAPIService from "../../services/auth-api-service";

class SignUp extends Component {
	state = {
		error: null,
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const { full_name, username, email, password } = e.target;
		this.setState({ error: null });
		AuthAPIService.postUser({
			full_name: full_name.value,
			username: username.value,
			email: email.value,
			password: password.value,
		})
			.then((user) => {
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
									<label htmlFor="full_name">Name</label>
									<input
										placeholder="First and Last Name"
										type="text"
										name="full_name"
										id="full_name"
									/>
								</div>
							</fieldset>
							<fieldset aria-label="nickname">
								<div>
									<label htmlFor="nickname">Nickname</label>
									<input
										placeholder="If you would like to be greeted by a name other than your full name, please enter it here."
										type="text"
										name="nickname"
										id="nickname"
									/>
								</div>
							</fieldset>
							<fieldset aria-label="username">
								<div>
									<label htmlFor="username">Username</label>
									<input
										type="text"
										placeholder="LightBringer85"
										name="username"
										id="username"
									/>
								</div>
							</fieldset>
							<fieldset aria-label="email">
								<div>
									<label htmlFor="email">Email</label>
									<input
										type="email"
										placeholder="email"
										name="email"
										id="email"
									/>
								</div>
							</fieldset>
							<fieldset aria-label="password">
								<div>
									<label htmlFor="password">Password</label>
									<input type="password" name="password" id="password" />
								</div>
							</fieldset>
							<fieldset aria-label="signup">
								<button className="signup" type="submit" aria-label="signup">
									<span>Sign Up</span>
								</button>
							</fieldset>
						</form>
					</div>
				</section>
			</>
		);
	}
}

export default SignUp;
