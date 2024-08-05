import { createBrowserRouter } from "react-router-dom";

import RootLayout from "./layouts/RootLayout";

import HomePage from "./pages/Home";
import NotFoundPage from "./pages/404";
import ProjectsPage from "./pages/Projects";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/projects", element: <ProjectsPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

export { router };
