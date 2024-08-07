import { useLoaderData } from "react-router-dom";
import { Project } from "../../../@types";
import { ExternalLink } from "lucide-react";

export default function ProjectPage() {
  const project = useLoaderData() as Project;

  return (
    <div className="bg-white rounded border p-3">
      <h1 className="font-bold text-4xl text-slate-700">{project.title}</h1>
      <p>{project.blurb}</p>
      <a
        href={project.url}
        target="_blank"
        className="inline-flex items-center gap-x-1 bg-white rounded border px-2 py-1"
      >
        Visit site
        <sup>
          <ExternalLink className="w-3 text-slate-500" />
        </sup>
      </a>

      <section>Image goes here</section>

      <section>Technologies go here</section>
    </div>
  );
}
