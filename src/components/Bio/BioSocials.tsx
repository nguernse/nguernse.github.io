import clsx from "clsx";
import { Bio } from "../../@types";

type Props = {
  socials: Bio["socials"];
  className?: string;
};

export default function BioSocials({ socials, className }: Props) {
  return (
    <div
      className={clsx(
        "flex justify-center md:justify-normal gap-x-2",
        className
      )}
    >
      <a
        className="px-3 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded flex items-center gap-x-2"
        href={socials.linkedin.url}
        target="_blank"
      >
        <img
          src={socials.linkedin.image}
          width={18}
          height={18}
          alt=""
          aria-hidden={true}
        />
        <span className="hidden md:inline-block">{socials.linkedin.label}</span>
      </a>

      <a
        className="px-3 py-2 bg-white hover:bg-gray-100 border rounded flex items-center gap-x-2"
        href={socials.github.url}
        target="_blank"
      >
        <img
          src={socials.github.image}
          width={18}
          height={18}
          alt=""
          aria-hidden={true}
        />
        <span className="hidden md:inline-block">{socials.github.label}</span>
      </a>
    </div>
  );
}
