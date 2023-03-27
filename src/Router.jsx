import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
]);


const Router = () => <RouterProvider router={router} />;

export default Router;