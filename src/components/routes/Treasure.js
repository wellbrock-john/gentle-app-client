import React, { Component } from "react";
import BackButton from "../BackButton";
import LogoutButton from "../LogoutButton";
import Context from "../../Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Treasure extends Component {
	static contextType = Context;

	render() {
		return (
			<>
				<header className="pages-header" role="banner">
					<BackButton />
					<LogoutButton />
					<h1 className="pages-h1">Gentle</h1>
					<h2>Feel safe. Be you.</h2>
				</header>
				<hr className="rounded" />
				<section>
					<header>
						<h3 className="pages-h3">
							The love you have for yourself wants to be seen!
						</h3>
						<h5>Click the icon below</h5>
					</header>
					<button
						className="heart-btn"
						onClick={(e) => this.context.handleToggleClick(e)}
					>
						<FontAwesomeIcon icon="hand-holding-heart" />
					</button>
				</section>
				<section>
					<div id="treasures-element">
						{this.context.showPositiveStatements === true && (
							<ul>
								{this.context.positivestatements.map((positivestatement) => {
									return (
										<li
											key={`positivestatement-${positivestatement.statement_id}`}
										>
											{positivestatement.content}
										</li>
									);
								})}
							</ul>
						)}
					</div>
				</section>
			</>
		);
	}
}

export default Treasure;
