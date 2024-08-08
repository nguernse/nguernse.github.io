import PageWrapper from "../../components/PageWrapper/PageWrapper";
import ProjectLink from "../../components/Projects/ProjectLink";
import Section from "../../components/Section/Section";
import { BIO } from "../../utils/constants";

export default function ProjectsPage() {
  return (
    <PageWrapper title="NG | Projects">
      <h1 className="font-display text-2xl text-gray-800 mb-3 dark:text-white">
        Projects
      </h1>

      <Section data-testid="project-list" variant="light">
        {BIO.projects.map((project) => (
          <ProjectLink project={project} key={project.slug} className="mb-4" />
        ))}
      </Section>
    </PageWrapper>
  );
}
