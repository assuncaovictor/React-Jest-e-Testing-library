import { atom } from "recoil";

export const saldo = atom({
    key: "saldo",
    default: 1000,
});

export const transacoes = atom({
    key: "transacoes",
    default: [],
});
