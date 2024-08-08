import JobStatus from "../JobStatus/JobStatus";
import { Bio } from "../../@types";
import Avatar from "../Avatar/Avatar";
import Paragraph from "../Paragraph/Paragraph";
import BioSocials from "./BioSocials";
import { Link } from "react-router-dom";

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
    <header data-testid="bio-header" className="mb-4 md:px-8 md:pb-8">
      <div className="flex justify-between items-center mb-4 md:mb-8">
        <span className="text-gray-600 dark:text-gray-100">{jobTitle}</span>

        <JobStatus status={jobStatus} />
      </div>

      <div className="flex flex-col md:flex-row md:gap-x-[40px]">
        <Link to="/about" className="md:order-1 mx-auto shrink-0 rounded-full">
          <Avatar
            path={profile}
            alt={name}
            size="xl"
            className="border-[15px] border-gray-100 dark:border-gray-700"
          />
        </Link>

        <div>
          <h1 className="font-display font-bold text-2xl md:text-4xl text-gray-900 text-center md:text-left dark:text-white">
            {name}
          </h1>

          <Paragraph className="my-3 text-base md:text-lg text-center md:text-left dark:text-white">
            {about}
          </Paragraph>

          <BioSocials socials={socials} className="mt-4" />
        </div>
      </div>
    </header>
  );
}
