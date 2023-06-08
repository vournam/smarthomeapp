import React from "react";
import { createRoot } from "react-dom/client";
import {  createBrowserRouter,  RouterProvider } from "react-router-dom";
import RandomScen from "./components/RandomScen";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const router = createBrowserRouter([
  {
    path: "/",
    element: <RandomScen />,
  },
  {
    path: "/form",
    element: <RandomScen />,
  },
]);

root.render(
  <RouterProvider router={router} />
);
