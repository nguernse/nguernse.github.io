import type { LoaderFunctionArgs } from "react-router-dom";
import { BIO } from "../../../utils/constants";

const ProjectLoader = async ({ params }: LoaderFunctionArgs) => {
  const project = BIO.projects.find((project) => project.slug === params.slug);

  if (!project) throw new Response("", {
    status: 404,
    statusText: "Project Not Found",
  });

  return project
}

export default ProjectLoader;