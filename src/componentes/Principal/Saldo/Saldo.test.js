import { render, screen } from "@testing-library/react";
import Saldo from ".";

describe("Componente <Saldo />", () => {
	test("deve renderizar o saldo com valor monetário", () => {
		const saldo = 1000;

		render(<Saldo saldo={saldo} />);

		const campoSaldo = screen.getByTestId("saldo");

		expect(campoSaldo).toHaveTextContent(`R$ ${saldo}`);
	});
});
