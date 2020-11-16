import React, { Component } from "react";
import { Link } from "react-router-dom";
import LogoutButton from "../LogoutButton";
import Context from "../../Context";

class HomePage extends Component {
	static contextType = Context;

	render() {
		return (
			<>
				<header role="banner">
					<LogoutButton />
					<h1>Gentle</h1>
					<h3>Welcome to your homepage</h3>
					<Link to={"/treasure"}>
						<button className="hidden-treasure">
							<span>Your Treasures</span>
						</button>
					</Link>
				</header>
				<section>
					<h4>This Is Your Space</h4>
					<p>
						Remember, you are not your thoughts. You are not your emotions. You
						are a being with a wonderful choice. That is, "How will I choose to
						handle this?" and that is all we can control. Give yourself grace
						and kindness as you move forward. Love yourself, even in your
						failures because, that is where you will learn the most.
					</p>
				</section>
				<section>
					<Link to={"/vent"}>
						<button>
							<span>Vent</span>
						</button>
					</Link>
					<Link to={"/notes"}>
						<button>
							<span>Note It</span>
						</button>
					</Link>
				</section>
			</>
		);
	}
}

export default HomePage;
