import React from "react";
import estilos from "./Saldo.module.css";
import { ReactComponent as Icone } from "./icone-olho.svg";
import { useSaldo } from "../../../state/hooks/useSaldo";

export default function Saldo() {
    const { saldo } = useSaldo();

    return (
        <div className={estilos.container}>
            <div className={estilos.wrapper}>
                <h2 className={estilos.saldo}>Saldo</h2>
                <Icone />
            </div>
            <div className={estilos.divisor} />
            <p className={estilos.conta}>Conta corrente</p>
            <p className={estilos.valor}>{`R$ ${saldo}`}</p>
        </div>
    );
}
