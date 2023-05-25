import { calculaNovoSaldo } from ".";

describe("Quando eu realizo uma transacao", () => {
	test("Que é um deposito, o saldo deve aumentar", () => {
		const transacao = {
			transacao: "Depósito",
			valor: 50,
		};

		const novoSaldo = calculaNovoSaldo(transacao, 100);

		expect(novoSaldo).toBe(150);
	});

    test("Que é uma transfência, o saldo deve diminuir", () => {
		const transacao = {
			transacao: "Transferência",
			valor: 50,
		};

		const novoSaldo = calculaNovoSaldo(transacao, 100);

		expect(novoSaldo).toBe(50);
	});
});

test("Deve retornar o valor do saldo atualizado com um rendimento", () => {
	const calculaRendimento = jest.fn((saldo) => {
		const novoSaldo = saldo * 1.005;
		return parseFloat(novoSaldo.toFixed(2));
	});

	const saldo = 100;

	const novoSaldo = calculaRendimento(saldo);

	expect(novoSaldo).toBe(100.5);
	expect(calculaRendimento).toHaveBeenCalledWith(saldo);
});
