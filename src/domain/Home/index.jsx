import React from "react";
import Cabecalho from "../../components/Cabecalho";
import Extrato from "./componentes/Extrato";
import Menu from "../../components/Menu";
import Principal from "./componentes/Principal";
import Transacao from "./componentes/Transacao";
import estilos from "./App.module.css";

const Home = () => {
    // const [saldo, setSaldo] = useState(1000);
    // const [transacoes, setTransacoes] = useState([]);

    // function realizarTransacao(valores) {
    //     const novoSaldo = calculaNovoSaldo(valores, saldo);
    //     setSaldo(novoSaldo);
    //     setTransacoes([...transacoes, valores]);
    // }

    return (
        <>
            <Cabecalho />
            <main className={estilos.container}>
                <Menu />
                <div className={estilos.wrapper}>
                    <Principal />
                    <Transacao />
                </div>
                <Extrato />
            </main>
        </>
    );
};

export default Home;
