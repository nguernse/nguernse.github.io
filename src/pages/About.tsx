import Avatar from "../components/Avatar/Avatar";
import Badge from "../components/Badge/Badge";
import AvailableStatement from "../components/Bio/AvailableStatement";
import BioExperience from "../components/Bio/BioExperience";
import BioSocials from "../components/Bio/BioSocials";
import EmployedStatement from "../components/Bio/EmploymentStatement";
import FunStatement from "../components/Bio/FunStatement";
import PageWrapper from "../components/PageWrapper/PageWrapper";
import Section from "../components/Section/Section";
import { BIO } from "../utils/constants";

export default function AboutPage() {
  return (
    <PageWrapper title="NG | About">
      <header className="mb-4">
        <Avatar
          path={BIO.profile}
          size="large"
          className="mb-2"
          alt={BIO.name}
        />
        <h1 className="font-display text-4xl font-bold text-gray-800 dark:text-white">
          About
        </h1>
      </header>

      <Section>
        {BIO.jobStatus === "available" ? (
          <AvailableStatement locations={BIO.jobLocations} />
        ) : (
          <EmployedStatement employer={BIO.currentEmployer} />
        )}

        <FunStatement yearsExperience={BIO.yearsExperience} />
      </Section>

      <Section>
        <BioSocials socials={BIO.socials} />
      </Section>

      <BioExperience
        work={BIO.workExperience}
        volunteer={BIO.volunteerExperience}
      />

      <Section variant="light" title="This Site Uses">
        <div className="flex flex-wrap gap-2">
          {[
            "React",
            "TailwindCSS",
            "Vitest",
            "React Testing Library",
            "React Router",
            "Git",
            "GitHub",
            "HTML",
            "CSS",
          ].map((skill) => (
            <Badge key={skill} variant="primary">
              {skill}
            </Badge>
          ))}
        </div>
      </Section>
    </PageWrapper>
  );
}
