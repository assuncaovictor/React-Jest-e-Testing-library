import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Formulario from ".";
import { RecoilRoot } from "recoil";
import { useSetTransacoes } from "../../../state/hooks/useSetTransacoes";

jest.mock("../../../state/hooks/useSetTransacoes", () => ({
	useSetTransacoes: jest.fn(),
}));

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

describe("O formulário", () => {
	beforeEach(() =>
		useSetTransacoes.mockReturnValue((_tipoDeTransacao, _valor) => {
			return;
		})
	);
	const handleSubmit = jest.fn();

	test("não deve executar a função handleSubmit se não houver valores nos campos", () => {
		render(
			<RecoilRoot>
				<Formulario />
			</RecoilRoot>
		);

		const botao = screen.getByTestId("botaoSubmit");
		userEvent.click(botao);

		expect(handleSubmit).not.toHaveBeenCalled();
	});

	test("deve executar a função handleSubmit se tiver valores nos campos", () => {
		const handleSubmitSpy = jest.spyOn(Formulario.prototype, "handleSubmit");

		render(
			<RecoilRoot>
				<Formulario />
			</RecoilRoot>
		);

		const inputValor = screen.getByPlaceholderText("Digite um valor");
		const selectTipo = screen.getByTestId("select-opcoes");

		fireEvent.change(inputValor, { target: { value: "50" } });
		fireEvent.change(selectTipo, { target: { value: "deposito" } });

		expect(inputValor.value).toBe("50");
		expect(selectTipo.value).toBe("deposito");

		const botao = screen.getByTestId("botaoSubmit");
		userEvent.click(botao);

		expect(handleSubmitSpy).toHaveBeenCalled();
		handleSubmitSpy.mockRestore();
	});
});
