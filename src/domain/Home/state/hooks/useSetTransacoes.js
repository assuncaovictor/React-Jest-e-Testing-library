import { useSaldo } from "./useSaldo";
import { useTransacoes } from "./useTransacoes";

export const useSetTransacoes = () => {
    const { saldo, setSaldo } = useSaldo();
    const { setTransacoes } = useTransacoes();

    return (tipoDeTransacao, valor) => {
        if (tipoDeTransacao === "transferencia" && saldo < valor) {
            return alert("Você não tem saldo para realizar a transação");
        }

        const novoValor = tipoDeTransacao === "transferencia" ? -valor : valor;

        setTransacoes((prev) => {
            return [
                ...prev,
                {
                    valor: novoValor,
                    data: new Date(),
                },
            ];
        });

        setSaldo((saldo) => {
            return saldo + novoValor;
        });
    };
};
