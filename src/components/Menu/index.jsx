import React from "react";
import estilos from "./Menu.module.css";
import { Link } from "react-router-dom";

const listaMenu = [
    "Inicial",
    "Transferências",
    "Investimentos",
    "Outros serviços",
];

export default function Menu() {
    return (
        <nav className={estilos.menu}>
            {listaMenu.map((item, indice) => {
                return (
                    <div key={item} className={estilos.item}>
                        <Link to="/" className={estilos.link}>
                            {item}
                        </Link>
                        {indice !== listaMenu.length - 1 && (
                            <div className={estilos.divisor} />
                        )}
                    </div>
                );
            })}
        </nav>
    );
}
