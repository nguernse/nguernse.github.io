import { useLoaderData } from "react-router-dom";
import { Project } from "../../../@types";
import { ExternalLink } from "lucide-react";
import Avatar from "../../../components/Avatar/Avatar";
import Paragraph from "../../../components/Paragraph/Paragraph";
import Badge from "../../../components/Badge/Badge";
import Section from "../../../components/Section/Section";

export default function ProjectPage() {
  const project = useLoaderData() as Project;

  return (
    <div className="bg-white rounded border p-4 md:p-8">
      <header className="mb-4">
        <Avatar path={project.logo} alt={project.title} />

        <h1 className="font-display font-bold text-4xl text-slate-700">
          {project.title}
        </h1>

        <Paragraph>{project.blurb}</Paragraph>

        <a
          href={project.url}
          target="_blank"
          className="inline-flex items-center gap-x-1 bg-slate-700 hover:bg-slate-800 text-white rounded px-2 py-1 mt-4"
        >
          Visit site
          <ExternalLink className="w-3 text-slate-50" />
        </a>
      </header>

      <Section>
        {project.details?.map((detail, index) => (
          <Paragraph key={index}>{detail}</Paragraph>
        ))}
      </Section>

      <Section>
        {project.images?.map((image, index) => (
          <picture key={index}>
            <source media="(max-width: 767px)" srcSet={image.mobile.jpeg} />
            <source media="(max-width: 767px)" srcSet={image.mobile.webp} />
            <source media="(min-width: 768px)" srcSet={image.tablet.jpeg} />
            <source media="(min-width: 768px)" srcSet={image.tablet.webp} />

            <img
              src={image.tablet.jpeg}
              alt={image.alt}
              className="rounded-md mb-4"
            />
          </picture>
        ))}
      </Section>

      <Section title="Technologies Used" variant="light">
        <div className="flex flex-wrap gap-2">
          {project.technologies?.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </Section>
    </div>
  );
}
