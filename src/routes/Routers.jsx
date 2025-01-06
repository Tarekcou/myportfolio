import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import AllProjectPage from "../pages/MyProject/AllProjectPage";
import ContactUsForm from "../pages/ContactUs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "allProjects",
        element: <AllProjectPage />,
      },
      {
        path: "project/:id",
        element: <div>Project Details</div>,
      },
      {
        path: "contact",
        element: <ContactUsForm />,
      },
    ],
  },

  {
    path: "*",
    element: <div>Page Not Found</div>,
  },
]);
