import { format } from "date-fns";
import React from "react";
import estilos from "../Extrato.module.css";
import { ptBR } from "date-fns/locale";

export default function Transacoes({ transacao }) {
	return (
		<li>
			<p className={estilos.mes}>
				{format(transacao.data, "LLLL", {
					locale: ptBR,
				})}
			</p>
			<div className={estilos.transacao}>
				<p data-testid="tipoTransacao">{transacao.valor > 0 ? "Depósito" : "Transferência"}</p>
				<span data-testid="dataTransacao">{format(transacao.data, "dd/LL/yyyy")}</span>
			</div>

			<h3 data-testid="valorTransacao" className={estilos.valor}>{`R$ ${transacao.valor}`}</h3>

			<div className={estilos.divisor} />
		</li>
	);
}
