import { createBrowserRouter } from "react-router-dom";
import Home from "../domain/Home";
import { App } from "../App";

const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
        ],
    },
]);

export { router };
