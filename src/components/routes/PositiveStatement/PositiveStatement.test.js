import React from "react";
import ReactDOM from "react-dom";
import PositiveStatement from "./PositiveStatement";

import { BrowserRouter as Router } from "react-router-dom";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(
		<Router>
			<PositiveStatement />
		</Router>,
		div
	);
	ReactDOM.unmountComponentAtNode(div); //cleanup
});
