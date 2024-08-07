import { createHashRouter } from "react-router-dom";

import RootLayout from "./layouts/RootLayout";

import HomePage from "./pages/Home";
import NotFoundPage from "./pages/404";
import ProjectsPage from "./pages/Projects";
import PageLayout from "./layouts/PageLayout";

const router = createHashRouter([
  {
    element: <RootLayout />,
    children: [{ path: "/", element: <HomePage /> }],
  },
  {
    element: <PageLayout />,
    children: [
      { path: "/projects", element: <ProjectsPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

export { router };
