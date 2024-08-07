import { createHashRouter } from "react-router-dom";

import RootLayout from "./layouts/RootLayout";

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
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [{ path: "/", element: <HomePage /> }],
  },
  {
    element: <PageLayout />,
    errorElement: <ErrorPage />,
    children: [
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
