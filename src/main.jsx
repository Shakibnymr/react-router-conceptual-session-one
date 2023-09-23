import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home/Home";

// const myCreatedRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <section>
//         <div>this is a fixed item</div>
//         <Outlet></Outlet>
//       </section>
//     ),
//     children: [
//       {
//         path: "/",
//         element: <h2>this is home route</h2>,
//       },
//       {
//         path: "/products",
//         element: <h2>this is products section</h2>,
//       },
//     ],
//   },
// ]);


const myCreatedRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/products",
        element: <div>this is products section</div>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={myCreatedRouter}></RouterProvider>
  </React.StrictMode>
);
