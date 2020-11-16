import React, { Component } from "react";
import TokenService from "../services/token-service";
import { withRouter } from "react-router-dom";
import Context from "../Context";

class LogoutButton extends Component {
	static contextType = Context;

	logout = () => {
		TokenService.clearAuthToken();
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
