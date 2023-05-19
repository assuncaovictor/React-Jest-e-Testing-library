import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import { sidebar } from "./sidebar";
import Body from "../components/Body";

const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                element: <Body />,
                children: sidebar.map(({ path, element }) => {
                    return {
                        path,
                        element,
                    };
                }),
            },
        ],
    },
]);

export { router };
