import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Balance from "./routes/balance/Balance";
import Dashboard from "./routes/dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Work In Progress</div>,
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  },
  {
    path: "/dashboard/balance",
    element: <Balance />
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
