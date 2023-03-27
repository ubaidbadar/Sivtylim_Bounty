import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
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
    }
]);


const Router = () => <RouterProvider router={router} />;

export default Router;