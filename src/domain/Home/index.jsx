import React from "react";
import Extrato from "./componentes/Extrato";
import Principal from "./componentes/Principal";
import Transacao from "./componentes/Transacao";
import estilos from "./App.module.css";

const Home = () => {
    return (
        <>
            <div className={estilos.wrapper}>
                <Principal />
                <Transacao />
            </div>
            <Extrato />
        </>
    );
};

export default Home;
