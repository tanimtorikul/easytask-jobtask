import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import DashboardLayout from "../layouts/Dashboard/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import Tasks from "../layouts/Dashboard/Tasks";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import CreateTask from "../layouts/Dashboard/CreateTask";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/dashboard", // Add a leading slash
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "tasks",
        element: (
          <PrivateRoute>
            <Tasks />
          </PrivateRoute>
        ),
      },
      {
        path: "createTask",
        element: (
          <PrivateRoute>
            <CreateTask />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
