import JobStatus from "../JobStatus/JobStatus";
import { Bio } from "../../@types";
import Avatar from "../Avatar/Avatar";
import Paragraph from "../Paragraph/Paragraph";
import BioSocials from "./BioSocials";

type Props = {
  name: Bio["name"];
  jobTitle: Bio["jobTitle"];
  about: Bio["about"];
  socials: Bio["socials"];
  profile: Bio["profile"];
  jobStatus: Bio["jobStatus"];
};

export default function BioHeader({
  name,
  jobTitle,
  about,
  socials,
  profile,
  jobStatus,
}: Props) {
  return (
    <header data-testid="bio-header" className="mb-4 md:p-8">
      <div className="flex justify-between items-center mb-4 md:mb-8">
        <span className="text-slate-600">{jobTitle}</span>

        <JobStatus status={jobStatus} />
      </div>

      <div className="flex flex-col md:flex-row md:gap-x-[40px]">
        <Avatar
          path={profile}
          alt={name}
          size="xl"
          className="md:order-1 mx-auto shrink-0 border-[15px] border-slate-100"
        />

        <div>
          <h1 className="font-display font-bold text-2xl md:text-4xl text-slate-900 text-center md:text-left">
            {name}
          </h1>

          <Paragraph className="my-3 text-base md:text-lg text-center md:text-left">
            {about}
          </Paragraph>

          <BioSocials socials={socials} />
        </div>
      </div>
    </header>
  );
}
