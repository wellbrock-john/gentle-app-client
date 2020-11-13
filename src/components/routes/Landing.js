import React, { Component } from "react";
import { Link } from "react-router-dom";

class LandingPage extends Component {
	render() {
		return (
			<>
				<header role="banner">
					<h1>Gentle</h1>
					<h2>Feel safe. Be you.</h2>
				</header>
				<section>
					<header>
						<h3>When You Are Ready</h3>
					</header>
					<Link to={"/login"}>
						<button>
							<span>Login</span>
						</button>
					</Link>
					<Link to={"/signup"}>
						<button>
							<span>Sign up</span>
						</button>
					</Link>
				</section>
			</>
		);
	}
}

export default LandingPage;
