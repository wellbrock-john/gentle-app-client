import React, { Component } from "react";
import { Link } from "react-router-dom";

class LandingPage extends Component {
	render() {
		return (
			<>
				<header role="banner">
					<h1 className="landing-h1">Gentle</h1>
					<h2>Feel safe. Be you.</h2>
				</header>
				<hr className="rounded" />
				<section className="landing-section">
					<div className="landing-description">
						<p>
							Hello and welcome to Gentle, an application made for anyone and
							everyone. This is a place for people, just like you and me, to
							come practice self-love, let out their frustrations or free their
							minds of clutter, through the use of a welcoming and comfortable
							to use, note taking page. Gentle offers a secure, safe space for
							users to express themselves. Come sign up to get started or, if
							you already have an account, please log in.
						</p>
					</div>
					<header>
						<h3>When You Are Ready</h3>
					</header>
					<div className="landing-btn-div">
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
					</div>
					<div className="landing-description">
						<p>
							If you would like to use a Demo account to test the application,
							please use the following credentials:
							<br />
							<br />
							Username: Demo
							<br />
							Password: P@ssword1234
						</p>
					</div>
				</section>
			</>
		);
	}
}

export default LandingPage;
