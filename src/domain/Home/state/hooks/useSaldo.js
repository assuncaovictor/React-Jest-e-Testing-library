import { useRecoilValue, useSetRecoilState } from "recoil";
import { saldo as atomSaldo } from "../atom";

export const useSaldo = () => {
    const saldo = useRecoilValue(atomSaldo);
    const setSaldo = useSetRecoilState(atomSaldo);

    return { saldo, setSaldo };
};
