import { useRecoilValue, useSetRecoilState } from "recoil";
import { transacoes as atomTransacoes } from "../atom";

export const useTransacoes = () => {
    const transacoes = useRecoilValue(atomTransacoes);
    const setTransacoes = useSetRecoilState(atomTransacoes);

    return { transacoes, setTransacoes };
};
