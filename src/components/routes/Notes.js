import React, { Component } from "react";
import BackButton from "../BackButton";
import LogoutButton from "../LogoutButton";
import Context from "../../Context";
import TokenService from "../../services/token-service";
import { API_ENDPOINT } from "../../config";

class Notes extends Component {
	static contextType = Context;

	state = {
		subject: "",
		content: "",
		error: null,
	};

	clearValues = () => {
		this.setState({
			subject: "",
			content: "",
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const { subject, content } = this.state;
		this.setState({ error: null });
		const newNote = {
			subject,
			content,
		};
		const postOptions = {
			method: "POST",
			headers: {
				Authorization: `Bearer ${TokenService.getAuthToken()}`,
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newNote),
		};

		fetch(`${API_ENDPOINT}/api/notes`, postOptions)
			.then((res) => {
				if (!res.ok) {
					throw new Error("Something went wrong, please try again later.");
				}
				return res.json();
			})
			.then((newNote) => {
				this.context.addNote(newNote);
				this.props.history.push(`/notes`);
			})
			.catch((err) => {
				this.setState({
					error: err.message,
				});
			});
	};

	updateNoteSubject = (noteSubject) => {
		this.setState({
			subject: noteSubject,
		});
	};

	updateNoteContent = (noteContent) => {
		this.setState({
			content: noteContent,
		});
	};

	validateNote() {
		const noteSubject = this.state.subject.trim();
		if (noteSubject.length === 0) {
			return "Subject is required";
		} else if (noteSubject.length > 50) {
			return "Subject input must be less than 50 characters long. Try to make it just a bit shorter!";
		}
		const noteContent = this.state.content.trim();
		if (noteContent.length === 0) {
			return "Sorry! I looks like you tried to save a note with nothing in it!";
		} else if (noteContent.length > 5000) {
			return "Wow! It's wonderful that you have so much to say, but it's best to try and keep your note a little more concise. :)";
		}
	}

	// deleteNoteRequest(e) {
	// 	e.preventDefault();
	// 	const deleteOptions = {
	// 		method: "DELETE",
	// 		headers: {
	// 			Authorization: `Bearer ${TokenService.getAuthToken()}`,
	// 			Accept: "application/json",
	// 			"Content-Type": "application/json",
	// 		},
	// 	};
	// 	fetch(`${API_ENDPOINT}/api/notes/${note_id}`, deleteOptions)
	// 		.then((res) => {
	// 			if (!res.ok) return res.json().then((error) => Promise.reject(error));
	// 		})
	// 		.then((noContent) => {
	// 			callback(note_id);
	// 		})
	// 		.catch((error) => {
	// 			console.error(error);
	// 		});
	// }

	render() {
		return (
			<>
				<header role="banner">
					<BackButton />
					<LogoutButton />
					<h1>Note It</h1>
					<h3>
						Allow yourself to feel free of cluttered thoughts. If something is
						bothering you, you can note it here. Then, bring it up in your next
						therapy session. Keep in mind that this is your space to note
						anything you like.
					</h3>
				</header>
				<section>
					<form
						className="note-form"
						aria-label="note-form"
						onSubmit={(e) => this.handleSubmit(e)}
					>
						<section className="form-section">
							<header>
								<h3>A Gentle Reminder</h3>
							</header>
							<label htmlFor="gentle-reminder"></label>
							<fieldset className="subject-line" aria-label="subject-line">
								<label htmlFor="subject">Subject</label>
								<input
									type="text"
									placeholder="Ex: Seasonal Depression"
									value={this.state.subject}
									className="subject"
									id="subject"
									onChange={(e) => this.updateNoteSubject(e.target.value)}
								/>
							</fieldset>
							<textarea
								className="gentle-reminder"
								id="gentle-reminder"
								value={this.state.content}
								rows="15"
								required
								onChange={(e) => this.updateNoteContent(e.target.value)}
							></textarea>
						</section>
						<button className="save-note" type="submit" aria-label="save-note">
							Save
						</button>
					</form>
					<div>
						<section className="notes-list">
							<ul>
								{this.context.notes.map((note) => {
									return (
										<li key={`note-${note.note_id}`}>
											{note.subject}
											{":"}
											{"  "}
											{note.content}
											{/* {"          "}
											<button
												className="delete-btn"
												onClick={(e) =>
													this.deleteNoteRequest(
														note.note_id,
														this.context.deleteNote()
													)
												}
											>
												Delete
											</button> */}
										</li>
									);
								})}
							</ul>
						</section>
					</div>
				</section>
			</>
		);
	}
}

export default Notes;
