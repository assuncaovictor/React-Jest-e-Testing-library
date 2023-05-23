import React, { useState } from "react";
import estilos from "./Formulario.module.css";
import { useSetTransacoes } from "../../../state/hooks/useSetTransacoes";

export default function Formulario() {
	const setTransacoes = useSetTransacoes();
	const [valor, setValor] = useState("");
	const [tipoTransacao, setTipoTransacao] = useState("");

	function handleChangeTipo(e) {
		const { value } = e.target;
		setTipoTransacao(value);
	}

	function handleChangeValor(e) {
		const { value } = e.target;
		setValor(value);
	}

	function handleSubmit(e) {
		e.preventDefault();

		setTransacoes(tipoTransacao, parseInt(valor));
	}

	return (
		<form className={estilos.formulario} onSubmit={handleSubmit}>
			<h3 className={estilos.legenda__opcoes}>Nova Transação</h3>

			<select
				className={estilos.grupo__opcoes}
				onChange={handleChangeTipo}
				name="transacao"
				data-testid="select-opcoes"
				value={tipoTransacao}
				required
			>
				<option value="">Selecione um tipo de transação</option>
				<option value="deposito">Depósito</option>
				<option value="transferencia">Transferência</option>
			</select>

			<label className={estilos.legenda}>
				Valor
				<input
					onChange={handleChangeValor}
					className={estilos.campo__valor}
					type="number"
					value={valor}
					name="valor"
					id="valor"
					placeholder="Digite um valor"
					data-testid="valorTransacao"
					required
				/>
			</label>

			<button className={estilos.botao} data-testid="botaoSubmit" type="submit">
				Realizar transação
			</button>
		</form>
	);
}
