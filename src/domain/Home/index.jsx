import React from "react";
import Extrato from "./components/Extrato";
import Principal from "./components/Principal";
import Transacao from "./components/Transacao";
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
