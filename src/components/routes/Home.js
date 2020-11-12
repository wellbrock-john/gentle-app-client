import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomePage extends Component {
	render() {
		return (
			<>
				<header role="banner">
					<Link to={"/treasure"}>
						<button className="hidden-treasure">
							<span>Treasure</span>
						</button>
					</Link>
					<h1>Gentle</h1>
					<h3>Welcome to your homepage, "User"</h3>
				</header>
				<section>
					<h4>This Is Your Space</h4>
					<p>
						Remember, you are not your thoughts. You are not your emotions. You
						are a being with a wonderful choice. That is, "How will I choose to
						handle this?" and that is all we can control. Give yourself grace
						and kindess as you move forward. Love yourself, even in your
						failures because, that is where you will learn the most. We love you
						and you should too.
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
