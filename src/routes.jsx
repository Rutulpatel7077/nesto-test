import { HomePage, DetailsPage, NotFound } from "src/pages";
import DashboardLayout from "./layouts/Dashboard.layout";
import MainLayout from "./layouts/Main.layout";

const routes = [
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "details/:id",
        element: <DetailsPage />,
      },
    ],
  },
  {
    path: "*",
    element: <MainLayout />,
    children: [
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];

export default routes;
