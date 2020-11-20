import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
	faAngleDoubleDown,
	faHandHoldingHeart,
} from "@fortawesome/free-solid-svg-icons";
import App from "./App";

library.add(faAngleDoubleDown, faHandHoldingHeart);

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(
		<MemoryRouter>
			<App />
		</MemoryRouter>,
		div
	);
	ReactDOM.unmountComponentAtNode(div);
});
