import JobStatus from "../JobStatus/JobStatus";
import ProfileImage from "../../assets/WorkProfile.jpeg";
import LinkedIn from "../../assets/In-White-26.png";
import GitHub from "../../assets/github.svg";
import { Bio } from "../../@types";

type Props = {
  bio: Bio;
};

export default function BioHeader({ bio }: Props) {
  return (
    <header data-testid="bio-header" className="mb-4 md:p-8">
      <div className="flex justify-between items-center mb-4 md:mb-8">
        <span className="text-slate-600">{bio.jobTitle}</span>

        <JobStatus status={bio.jobStatus} />
      </div>

      <div className="flex flex-col md:flex-row md:gap-x-[40px]">
        <div className="md:order-1 h-[150px] w-[150px] border-[15px] border-slate-100 rounded-full mx-auto shrink-0">
          <img
            src={ProfileImage}
            alt="Profile pic"
            width={150}
            height={150}
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        <div>
          <h1 className="font-bold text-2xl md:text-4xl text-slate-900 text-center md:text-left">
            {bio.name}
          </h1>

          <p className="text-slate-600 my-3 text-base md:text-lg text-center md:text-left">
            {bio.about}
          </p>

          <div className="flex justify-center md:justify-normal gap-x-2">
            <a
              className="px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded flex items-center gap-x-2"
              href={bio.socials.linkedin.url}
              target="_blank"
            >
              <img src={LinkedIn} width={18} height={18} />
              <span className="hidden md:inline-block">
                {bio.socials.linkedin.label}
              </span>
            </a>

            <a
              className="px-3 py-2 bg-white hover:bg-slate-100 border rounded flex items-center gap-x-2"
              href={bio.socials.github.url}
              target="_blank"
            >
              <img src={GitHub} width={18} height={18} />
              <span className="hidden md:inline-block">
                {bio.socials.github.label}
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
