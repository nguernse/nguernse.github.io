import BioHeader from "./BioHeader";
import BioFooter from "./BioFooter";
import BioSkills from "./BioSkills";
import BioProjects from "./BioProjects";
import { BIO } from "../../utils/constants";

export default function Bio() {
  return (
    <div>
      <BioHeader bio={BIO} />
      <BioProjects projects={BIO.projects.slice(0, 3)} />
      <BioSkills skills={BIO.skills} />
      <BioFooter />
    </div>
  );
}
