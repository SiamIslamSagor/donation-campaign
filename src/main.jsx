import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import ErrorPage from "./Components/ErrorPage/ErrorPage.jsx";
import HomeSection from "./Components/HomeSection/HomeSection.jsx";
import DonatePage from "./Components/DonatePage/DonatePage";
import DonationBox from "./Components/DonationBox/DonationBox";
import Statistics from "./Components/Statistics/Statistics";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    loader: () => fetch("data.json"),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomeSection></HomeSection>,
      },
      {
        path: "/donation-details",
        element: <DonatePage></DonatePage>,
      },
      {
        path: "/donation-box",
        element: <DonationBox></DonationBox>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
