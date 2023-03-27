import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import BreakFast from "./pages/Breakfast";
import Home from "./pages/Home";
import Music from "./pages/Music";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/music",
        element: <Music />
    },
    {
        path: "/breakfast",
        element: <BreakFast />
    }
]);


const Router = () => <RouterProvider router={router} />;

export default Router;