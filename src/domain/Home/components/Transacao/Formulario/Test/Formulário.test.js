import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Formulario from "..";
import { RecoilRoot } from "recoil";

describe("Deve renderizar um campo de input", () => {
	test("com type de number", () => {
		render(
			<RecoilRoot>
				<Formulario />
			</RecoilRoot>
		);

		const campoTexto = screen.getByPlaceholderText("Digite um valor");
		expect(campoTexto).toHaveAttribute("type", "number");
	});

	test("que pode ser preenchido", () => {
		render(
			<RecoilRoot>
				<Formulario />
			</RecoilRoot>
		);

		const campoTexto = screen.getByPlaceholderText("Digite um valor");

		userEvent.type(campoTexto, "50");
		expect(campoTexto).toHaveValue(50);
	});
});

describe("O campo select deve", () => {
	test("possuir três options", () => {
		render(
			<RecoilRoot>
				<Formulario />
			</RecoilRoot>
		);

		const camposOption = screen.getAllByRole("option");

		expect(camposOption).toHaveLength(3);
	});

	test("ter as options como valor ``, `deposito` e `transferencia`", () => {
		render(
			<RecoilRoot>
				<Formulario />
			</RecoilRoot>
		);

		const camposOption = screen.getAllByRole("option");
		const options = ["", "deposito", "transferencia"];

		camposOption.forEach((campoOption, index) => {
			expect(campoOption).toHaveAttribute("value", options[index]);
		});
	});
});
