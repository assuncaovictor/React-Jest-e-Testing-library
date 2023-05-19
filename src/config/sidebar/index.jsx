import Home from "../../domain/Home";

export const sidebar = [
    {
        path: "/",
        element: <Home />,
        text: "Inicial",
    },

    {
        path: "/transferencias",
        element: <div>Transferências</div>,
        text: "Transferências",
    },

    {
        path: "/investimentos",
        element: <div>Investimentos</div>,
        text: "Investimentos",
    },

    {
        path: "/servicos",
        element: <div>Outros serviços</div>,
        text: "Outros serviços",
    },
];
