import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RandomScen from "./components/RandomScen";
import Modal from "react-modal";

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

Modal.setAppElement(rootElement); // Add this line to set the app element so the screen readers to not see the main content when the modal is open.

root.render(<RouterProvider router={router} />);
