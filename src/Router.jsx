import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import BreakFast from "./pages/Breakfast";
import Dinner from "./pages/Dinner";
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
    },
    {
        path: "/dinner",
        element: <Dinner />
    }
]);


const Router = () => <RouterProvider router={router} />;

export default Router;