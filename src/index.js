import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
	faAngleDoubleDown,
	faHandHoldingHeart,
} from "@fortawesome/free-solid-svg-icons";
import App from "./App";
import "./index.css";

library.add(faAngleDoubleDown, faHandHoldingHeart);

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,

	document.getElementById("root")
);
