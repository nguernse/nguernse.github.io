import { useLoaderData } from "react-router-dom";
import { Project } from "../../../@types";
import { ExternalLink } from "lucide-react";
import Avatar from "../../../components/Avatar/Avatar";
import Paragraph from "../../../components/Paragraph/Paragraph";
import Badge from "../../../components/Badge/Badge";
import Section from "../../../components/Section/Section";
import PageWrapper from "../../../components/PageWrapper/PageWrapper";

export default function ProjectPage() {
  const project = useLoaderData() as Project;

  return (
    <PageWrapper title={`NG | ${project.title}`}>
      <header className="mb-4">
        <Avatar path={project.logo} alt={project.title} />

        <h1 className="font-display font-bold text-4xl text-gray-700 dark:text-white">
          {project.title}
        </h1>

        <Paragraph>{project.blurb}</Paragraph>

        <a
          href={project.url}
          target="_blank"
          className="inline-flex items-center gap-x-1 bg-gray-700 hover:bg-gray-800 text-white rounded px-3 py-2 mt-4 dark:bg-gray-100 dark:hover:bg-gray-200 dark:text-gray-900"
        >
          Visit site
          <ExternalLink className="w-3 text-gray-50 dark:text-gray-900" />
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
    </PageWrapper>
  );
}
