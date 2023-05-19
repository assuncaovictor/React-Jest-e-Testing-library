import React from "react";
import { Outlet } from "react-router-dom";
import { RecoilRoot } from "recoil";

export const App = () => {
    return (
        <RecoilRoot>
            <Outlet />
        </RecoilRoot>
    );
};
