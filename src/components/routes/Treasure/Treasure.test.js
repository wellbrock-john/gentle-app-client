import React from "react";
import ReactDOM from "react-dom";
import Treasure from "./Treasure";
import Context from "../../../Context";
import { BrowserRouter as Router } from "react-router-dom";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(
		<Context.Provider value={{ positivestatements: [] }}>
			<Router>
				<Treasure />
			</Router>
		</Context.Provider>,
		div
	);
	ReactDOM.unmountComponentAtNode(div); //cleanup
});
