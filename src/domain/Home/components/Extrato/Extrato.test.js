import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Extrato from ".";
import { useTransacoes } from "../../state/hooks/useTransacoes";

jest.mock("../../state/hooks/useTransacoes", () => ({
	useTransacoes: jest.fn(),
}));

describe("Deve renderizar uma lista de transações", () => {
	beforeEach(() =>
		useTransacoes.mockReturnValue({
			transacoes: [
				{
					valor: 2900,
					data: new Date(),
				},
				{
					valor: -1000,
					data: new Date(),
				},
				{
					valor: -500,
					data: new Date(),
				},
			],
		})
	);

	test("com 3 transações", () => {
		render(
			<RecoilRoot>
				<Extrato />
			</RecoilRoot>
		);

		const lista = screen.getAllByRole("listitem");
		expect(lista).toHaveLength(3);
	});
});
