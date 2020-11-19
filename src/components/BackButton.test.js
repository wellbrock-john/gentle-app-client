import React from "react";
import { Router } from "react-router-dom";
import { render, fireEvent } from "@testing-library/react";
import { createMemoryHistory } from "history";
import BackButton from "./BackButton";

const renderWithRouter = (component) => {
	const history = createMemoryHistory();
	return {
		...render(<Router history={history}>{component}</Router>),
	};
};

it("renders without crashing", () => {
	renderWithRouter(<BackButton />);
});
