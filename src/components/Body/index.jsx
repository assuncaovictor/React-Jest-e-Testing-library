import React from "react";
import Cabecalho from "../../components/Cabecalho";
import Menu from "../../components/Menu";
import estilos from "./App.module.css";
import { Outlet } from "react-router-dom";

const Body = () => {
    return (
        <>
            <Cabecalho />
            <main className={estilos.container}>
                <Menu />
                <Outlet />
            </main>
        </>
    );
};

export default Body;
