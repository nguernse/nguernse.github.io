import { Bio } from "../../@types";

type Props = {
  socials: Bio["socials"];
};

export default function BioSocials({ socials }: Props) {
  return (
    <div className="flex justify-center md:justify-normal gap-x-2">
      <a
        className="px-3 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded flex items-center gap-x-2"
        href={socials.linkedin.url}
        target="_blank"
      >
        <img src={socials.linkedin.image} width={18} height={18} alt="" />
        <span className="hidden md:inline-block">{socials.linkedin.label}</span>
      </a>

      <a
        className="px-3 py-2 bg-white hover:bg-slate-100 border rounded flex items-center gap-x-2"
        href={socials.github.url}
        target="_blank"
      >
        <img src={socials.github.image} width={18} height={18} alt="" />
        <span className="hidden md:inline-block">{socials.github.label}</span>
      </a>
    </div>
  );
}
