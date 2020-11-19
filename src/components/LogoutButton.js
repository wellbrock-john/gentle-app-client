import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Context from "../Context";
import TokenService from "../services/token-service";

class LogoutButton extends Component {
	static contextType = Context;

	logout = () => {
		TokenService.clearAuthToken();
		this.context.logout();
		this.props.history.push("/");
	};
	render() {
		return (
			<>
				<button
					className="logout-button"
					aria-label="logout-button"
					type="submit"
					onClick={() => this.logout()}
				>
					Log Out
				</button>
			</>
		);
	}
}

export default withRouter(LogoutButton);
