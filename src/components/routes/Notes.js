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
				this.clearValues();
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

	deleteNoteRequest(note_id) {
		const deleteOptions = {
			method: "DELETE",
			headers: {
				Authorization: `Bearer ${TokenService.getAuthToken()}`,
			},
		};
		fetch(`${API_ENDPOINT}/api/notes/${note_id}`, deleteOptions)
			.then((res) => {
				if (!res.ok) return res.json().then((error) => Promise.reject(error));
				this.context.deleteNote(note_id);
			})
			.catch((error) => {
				console.error(error);
			});
	}

	render() {
		return (
			<>
				<header className="notes-header" role="banner">
					<BackButton />
					<LogoutButton />
					<h1 className="pages-h1">Note It</h1>
					<h3 className="notes-h3">
						Allow yourself to feel free of cluttered thoughts.
					</h3>
				</header>
				<section>
					<form
						className="note-form"
						aria-label="note-form"
						onSubmit={(e) => this.handleSubmit(e)}
					>
						<section className="form-section">
							<label htmlFor="gentle-reminder"></label>
							<fieldset className="subject-line" aria-label="subject-line">
								<label htmlFor="subject">Subject</label>
								<input
									type="text"
									placeholder="Ex: A Gentle Reminder"
									value={this.state.subject}
									className="subject"
									id="subject"
									onChange={(e) => this.updateNoteSubject(e.target.value)}
									required
								/>
							</fieldset>
							<textarea
								className="gentle-reminder"
								id="gentle-reminder"
								placeholder="Remember to..."
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
											<strong>
												{note.subject}
												{":"}
											</strong>

											{"  "}
											{note.content}

											<button
												className="delete-btn"
												onClick={(e) => this.deleteNoteRequest(note.note_id)}
											>
												X
											</button>
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
