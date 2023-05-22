import React from "react";
import estilos from "./Principal.module.css";
import { ReactComponent as Ilustracao } from "./ilustracao.svg";
import Saldo from "./Saldo";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export default function Principal() {
    return (
        <section className={estilos.container}>
            <div className={estilos.detalhe__superior} />
            <h1 className={estilos.titulo}>Olá, Joana :)!</h1>
            <p className={estilos.data}>
                {format(new Date(), "EEEE, dd/LL/yyyy", {
                    locale: ptBR,
                })}
            </p>
            <div className={estilos.wrapper}>
                <Ilustracao
                    className={estilos.ilustracao}
                    width="230"
                    height="185"
                />
                <Saldo />
            </div>
            <div className={estilos.detalhe__inferior} />
        </section>
    );
}
