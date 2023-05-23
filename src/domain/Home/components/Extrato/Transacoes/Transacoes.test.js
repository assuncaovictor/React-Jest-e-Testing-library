import { render, screen } from "@testing-library/react";
import Transacoes from ".";

describe("Deve renderizar um mesmo componente com", () => {
	test("o tipo correto da transacao de deposito", () => {
		const transacao = {
			valor: 90,
			data: new Date(),
		};

		render(<Transacoes transacao={transacao} />);

		const valorTransacao = screen.getByTestId(`tipoTransacao`);

		expect(valorTransacao).toHaveTextContent("Depósito");
	});

	test("o tipo correto da transacao de transferência", () => {
		const transacao = {
			valor: -80,
			data: new Date(),
		};

		render(<Transacoes transacao={transacao} />);

		const valorTransacao = screen.getByTestId(`tipoTransacao`);

		expect(valorTransacao).toHaveTextContent("Transferência");
	});

	test("novos valores sendo passando corretamente", () => {
		const transacao = {
			valor: 90,
			data: new Date(),
		};

		const { rerender } = render(<Transacoes transacao={transacao} />);

		const valorTransacao = screen.getByTestId(`tipoTransacao`);
		expect(valorTransacao).toHaveTextContent("Depósito");

		const novaTransacao = {
			valor: -90,
			data: new Date(),
		};

		rerender(<Transacoes transacao={novaTransacao} />);

		const novoValorTransacao = screen.getByTestId(`tipoTransacao`);
		expect(novoValorTransacao).toHaveTextContent("Transferência");
	});

	test("o formato correto de data", () => {
		const transacao = {
			valor: 900,
			data: new Date("December 17, 1995"),
		};

		render(<Transacoes transacao={transacao} />);

		const data = screen.getByTestId("dataTransacao");

		expect(data).toHaveTextContent("17/12/1995");
	});
});
