import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home";

import { MemoryRouter as Router } from "react-router-dom";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(
		<Router>
			<Home />
		</Router>,
		div
	);
	ReactDOM.unmountComponentAtNode(div); //cleanup
});
