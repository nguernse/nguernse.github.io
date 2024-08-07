import { Bio } from "../../@types";

type Props = {
  socials: Bio["socials"];
};

export default function BioFooter({ socials }: Props) {
  return (
    <footer className="p-4 md:p-8 bg-slate-50 rounded flex flex-col md:flex-row md:justify-between text-slate-700">
      <span>&copy; 2025</span>

      <div>
        <a
          href={socials.linkedin.url}
          target="_blank"
          className="underline inline-block mx-1 hover:text-blue-600"
        >
          LinkedIn
        </a>
        /
        <a
          href={socials.github.url}
          target="_blank"
          className="underline inline-block mx-1 hover:text-blue-600"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}
