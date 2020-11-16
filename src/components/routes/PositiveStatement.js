import React, { Component } from "react";
import LogoutButton from "../LogoutButton";
import { API_ENDPOINT } from "../../config";
import Context from "../../Context";
import TokenService from "../../services/token-service";

class PositiveStatement extends Component {
	static contextType = Context;

	state = {
		content: "",
		user_id: null,
		touched: false,
		error: null,
	};

	clearValues = () => {
		this.setState({
			content: "",
			user_id: null,
			touched: false,
			error: null,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const { content, user_id } = this.state;
		this.setState({ error: null });
		const newPositiveStatement = {
			content,
			user_id: Number(user_id),
		};
		const postOptions = {
			method: "POST",
			headers: {
				Authorization: `Bearer ${TokenService.getAuthToken()}`,
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newPositiveStatement),
		};

		fetch(`${API_ENDPOINT}/api/positivestatements`, postOptions)
			.then((res) => {
				if (!res.ok) {
					throw new Error("Something went wrong, please try again later");
				}
				return res.json();
			})
			.then((positivestatement) => {
				this.context.addPositiveStatement(positivestatement);
				this.props.history.push(`/home`);
			})
			.catch((err) => {
				this.setState({
					error: err.message,
				});
			});
	};

	updatePositiveStatement = (positivestatementContent) => {
		this.setState({
			content: positivestatementContent,
			user_id: 1,
			touched: true,
		});
	};

	validatePositiveStatementContent() {
		const positivestatementContent = this.state.content.trim();
		if (positivestatementContent.length === 0) {
			return "Content is required";
		} else if (positivestatementContent.length < 3) {
			return "Content must be at least 3 characters long";
		}
	}

	render() {
		return (
			<>
				<header role="banner">
					<LogoutButton />
					<h1>Welcome</h1>
					<h3>Let's begin with a gentle, positive step forward.</h3>
				</header>
				<section>
					<div className="positive-statement-div">
						<form
							className="positive-statement-form"
							aria-label="positive-statement-form"
							onSubmit={(e) => this.handleSubmit(e)}
						>
							<div className="form-section">
								<header>
									<h3>Write something positive about you.</h3>
								</header>
								<label htmlFor="positive-statement-form"></label>
								<textarea
									className="positive-statement-form"
									id="positive-statement-form"
									value={this.state.content}
									rows="15"
									minLength="10"
									required
									onChange={(e) => this.updatePositiveStatement(e.target.value)}
								></textarea>
							</div>
							<button type="submit" aria-label="positive-statement-button">
								<span>Treasure It</span>
							</button>
						</form>
					</div>
				</section>
			</>
		);
	}
}

export default PositiveStatement;
