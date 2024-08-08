import { createHashRouter } from "react-router-dom";

import HomePage from "./pages/Home";
import NotFoundPage from "./pages/NotFound";
import ProjectsPage from "./pages/Projects/Projects";
import PageLayout from "./layouts/PageLayout";
import ProjectPage from "./pages/Projects/[id]/ProjectPage";
import ErrorPage from "./pages/ErrorPage";
import projectLoader from "./pages/Projects/[id]/ProjectPage.loader";
import AboutPage from "./pages/About";

const router = createHashRouter([
  {
    element: <PageLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/projects",
        element: <ProjectsPage />,
      },
      {
        path: "/projects/:slug",
        element: <ProjectPage />,
        loader: projectLoader,
      },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

export { router };
