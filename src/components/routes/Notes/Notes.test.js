import React from "react";
import ReactDOM from "react-dom";
import Notes from "./Notes";
import Context from "../../../Context";
import { BrowserRouter as Router } from "react-router-dom";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(
		<Context.Provider value={{ notes: [] }}>
			<Router>
				<Notes />
			</Router>
		</Context.Provider>,
		div
	);
	ReactDOM.unmountComponentAtNode(div); //cleanup
});
