import React, { useState } from "react";
import estilos from "./Formulario.module.css";
import { useSetTransacoes } from "../../../state/hooks/useSetTransacoes";

export default function Formulario() {
    const setTransacoes = useSetTransacoes();
    const [valor, setValor] = useState({ transacao: "", valor: "" });

    function handleChange(e) {
        const { name, value } = e.target;
        const valoresAtualizados = { ...valor, [name]: value };
        setValor(valoresAtualizados);
    }

    function handleSubmit(e) {
        e.preventDefault();


        setTransacoes(valor.transacao, parseInt(valor.valor));

        setValor({ ...valor, valor: "" });
    }

    return (
        <form className={estilos.formulario} onSubmit={handleSubmit}>
            <h3 className={estilos.legenda__opcoes}>Nova Transação</h3>

            <select
                className={estilos.grupo__opcoes}
                onChange={handleChange}
                name="transacao"
                data-testid="select-opcoes"
                required
                defaultValue=""
            >
                <option value="">Selecione um tipo de transação</option>
                <option value="deposito">Depósito</option>
                <option value="transferencia">Transferência</option>
            </select>

            <label className={estilos.legenda}>
                Valor
                <input
                    onChange={handleChange}
                    className={estilos.campo__valor}
                    type="number"
                    value={valor.valor}
                    name="valor"
                    id="valor"
                    placeholder="Digite um valor"
                    required
                />
            </label>

            <button className={estilos.botao} type="submit">
                Realizar transação
            </button>
        </form>
    );
}
