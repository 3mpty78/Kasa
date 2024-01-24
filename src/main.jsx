import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.scss";
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";
import ApartmentInfos from "./pages/ApartmentInfos.jsx";
import Homepage from "./pages/Homepage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/apartment/:id",
        element: <ApartmentInfos />,
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
