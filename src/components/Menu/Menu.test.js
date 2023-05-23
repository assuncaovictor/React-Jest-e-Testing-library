import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Menu from ".";
import { sidebar } from "../../config/sidebar";

test("Deve renderizar uma lista de links", () => {
	render(
		<BrowserRouter>
			<Menu />
		</BrowserRouter>
	);

	const linksDaSidebar = screen.getAllByRole("link");

	expect(linksDaSidebar).toHaveLength(sidebar.length);
});

test("Não deve renderizar o link para extrato", () => {
	render(
		<BrowserRouter>
			<Menu />
		</BrowserRouter>
	);

	const linkDoExtrato = screen.queryByText("Extrato");

	expect(linkDoExtrato).not.toBeInTheDocument();
});

test("Deve reenderizar uma lista de links com a classe link", () => {
	render(
		<BrowserRouter>
			<Menu />
		</BrowserRouter>
	);

	const linksDaSidebar = screen.getAllByRole("link");

	linksDaSidebar.forEach((link) => expect(link).toHaveClass("link"));
	expect(linksDaSidebar).toMatchSnapshot();
});
