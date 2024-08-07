import Avatar from "../components/Avatar/Avatar";
import AvailableStatement from "../components/Bio/AvailableStatement";
import EmployedStatement from "../components/Bio/EmploymentStatement";
import FunStatement from "../components/Bio/FunStatement";
import { BIO } from "../utils/constants";

export default function AboutPage() {
  return (
    <div className="bg-white border rounded p-4 md:p-8">
      <header>
        <Avatar
          path={BIO.profile}
          size="large"
          className="mb-2"
          alt={BIO.name}
        />
        <h1 className="font-display text-4xl font-bold text-slate-800">
          About
        </h1>
      </header>

      <section className="mb-4">
        {BIO.jobStatus === "available" ? (
          <AvailableStatement locations={BIO.jobLocations} />
        ) : (
          <EmployedStatement employer={BIO.currentEmployer} />
        )}

        <FunStatement yearsExperience={BIO.yearsExperience} />

        <div className="flex justify-center md:justify-normal gap-x-2">
          <a
            className="px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded flex items-center gap-x-2"
            href={BIO.socials.linkedin.url}
            target="_blank"
          >
            <img src={BIO.socials.linkedin.image} width={18} height={18} />
            <span className="hidden md:inline-block">
              {BIO.socials.linkedin.label}
            </span>
          </a>

          <a
            className="px-3 py-2 bg-white hover:bg-slate-100 border rounded flex items-center gap-x-2"
            href={BIO.socials.github.url}
            target="_blank"
          >
            <img src={BIO.socials.github.image} width={18} height={18} />
            <span className="hidden md:inline-block">
              {BIO.socials.github.label}
            </span>
          </a>
        </div>
      </section>

      <section
        data-testid="bio-skills"
        className="p-4 md:p-8 bg-slate-100 rounded mb-4"
      >
        <h2 className="font-display text-2xl mb-3 text-slate-600">
          This Site Uses
        </h2>

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
            <span
              key={skill}
              className="bg-blue-500 text-white rounded-full px-3 py-1 text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
