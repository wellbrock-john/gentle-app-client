import React from "react";
import ReactDOM from "react-dom";
import Treasure from "./Treasure";

import { BrowserRouter as Router } from "react-router-dom";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(
		<Router>
			<Treasure />
		</Router>,
		div
	);
	ReactDOM.unmountComponentAtNode(div); //cleanup
});
