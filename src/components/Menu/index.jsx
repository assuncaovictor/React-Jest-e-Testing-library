import React from "react";
import estilos from "./Menu.module.css";
import { Link } from "react-router-dom";
import { sidebar } from "../../config/sidebar";

export default function Menu() {
    return (
        <nav className={estilos.menu}>
            {sidebar.map(({ path, text }, indice) => {
                return (
                    <div key={text} className={estilos.item}>
                        <Link to={path} className={estilos.link}>
                            {text}
                        </Link>
                        {indice !== sidebar.length - 1 && (
                            <div className={estilos.divisor} />
                        )}
                    </div>
                );
            })}
        </nav>
    );
}
