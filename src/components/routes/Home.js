import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Context from "../../Context";
import LogoutButton from "../LogoutButton";

class HomePage extends Component {
	static contextType = Context;

	render() {
		return (
			<>
				<header className="pages-header" role="banner">
					<LogoutButton />
					<h1 className="pages-h1">Gentle</h1>
					<h5>Welcome to your homepage</h5>
				</header>
				<hr className="rounded" />
				<section>
					<div className="home-div">
						<hr className="rounded-home-top" />
						<h5 className="your-space">This Is Your Space</h5>
						<hr className="rounded" />
						<p>
							Here and now, you are free to be you. Give yourself grace and
							kindness as you move forward. Allow yourself what you need.
						</p>
						<br />
						<div className="vent-link-div">
							<p>
								Need a safe place to let it all out? Release your frustrations
								in your{" "}
								<em>
									<strong>Vent</strong>
								</em>{" "}
								space <FontAwesomeIcon icon="angle-double-down" />
							</p>

							<Link to={"/vent"}>
								<button>
									<span>Vent</span>
								</button>
							</Link>
						</div>
						<div>
							<p>
								If your mind feels cluttered, store some of that clutter in your{" "}
								<em>
									<strong>Note It</strong>
								</em>{" "}
								space <FontAwesomeIcon icon="angle-double-down" />
							</p>
							<Link to={"/notes"}>
								<button>
									<span>Note It</span>
								</button>
							</Link>
						</div>
						<br />
						<br />
						<p>
							Come see the wonderful words you have gifted yourself{" "}
							<FontAwesomeIcon icon="angle-double-down" />
						</p>
						<Link to={"/treasure"}>
							<button className="heart-btn">
								<FontAwesomeIcon icon="hand-holding-heart" />
							</button>
						</Link>
					</div>
				</section>
			</>
		);
	}
}

export default HomePage;
