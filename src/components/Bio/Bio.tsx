import BioHeader from "./BioHeader";
import BioSkills from "./BioSkills";
import BioProjects from "./BioProjects";
import { BIO } from "../../utils/constants";

export default function Bio() {
  return (
    <div>
      <BioHeader
        name={BIO.name}
        jobTitle={BIO.jobTitle}
        about={BIO.about}
        socials={BIO.socials}
        jobStatus={BIO.jobStatus}
        profile={BIO.profile}
      />
      <BioProjects projects={BIO.projects.slice(0, 3)} />
      <BioSkills skills={BIO.skills} />
    </div>
  );
}
