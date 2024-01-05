import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import "./index.scss";
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";
import ApartmentInfos from "./pages/ApartmentInfos.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "*",
        element: <NotFound />,
    },
    {
        path: "/apartment/:id",
        element: <ApartmentInfos />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
