import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "./views";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    }
]);

export default function Routes() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}