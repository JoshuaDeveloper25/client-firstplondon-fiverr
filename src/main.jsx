// --> External imports
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// --> Styles
import "./index.css";

// --> Pages
import HomePage from "./pages/HomePage/HomePage.jsx";
import Blog from "./pages/Blog/Blog.jsx";
import Root from "./pages/Root.jsx";
import Form from "./pages/Form/Form.jsx";
import Appreciation from "./pages/Appreciation/Appreciation.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        element: <HomePage />,
        index: true,
      },

      {
        element: <Blog />,
        path: "/blog",
      },

      {
        element: <Form />,
        path: "/form",
      },

      {
        element: <Appreciation />,
        path: "/appreciation",
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
