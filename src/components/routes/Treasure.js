import React, { Component } from "react";
import BackButton from "../BackButton";
import LogoutButton from "../LogoutButton";
import Context from "../../Context";

class Treasure extends Component {
	static contextType = Context

	render() {
		
		return (
			<>
				<header role="banner">
					<BackButton />
					<LogoutButton />
					<h1>Gentle</h1>
					<h2>Feel safe. Be you.</h2>
				</header>
				<section>
					<header>
						<h3>
							The love we give ourselves, amplifies the love we can give to
							others.
						</h3>
						<h4>The love you have for yourself wants to be seen!</h4>
						<h5>Click the icon below</h5>
					</header>
					<button onClick={(e) => this.context.handleToggleClick(e)}>This will be a treasure icon</button>
				</section>
				<section>
					<div id="treasures-element">
						{this.context.showPositiveStatements === true &&
							<ul>
								{this.context.positivestatements.map(positivestatement => {
            						return <li key={`positivestatement-${positivestatement.statement_id}`}>{positivestatement.content}</li>
          							})
								}
							</ul>
						}
					</div>
				</section>
			</>
		);
	}
}

export default Treasure;
