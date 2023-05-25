export const calculaNovoSaldo = (valores, saldo) => {
	if (valores.transacao === "Depósito") {
		return saldo + parseInt(valores.valor);
	}

	return saldo - parseInt(valores.valor);
};
