import { BIO } from "../../utils/constants";

export default function BioFooter() {
  return (
    <footer className="p-4 md:p-8 bg-slate-50 rounded flex flex-col md:flex-row md:justify-between text-slate-400">
      <span>&copy; 2025</span>

      <div>
        <a
          href={BIO.socials.linkedin.url}
          target="_blank"
          className="underline inline-block mx-1 hover:text-blue-600"
        >
          LinkedIn
        </a>
        |
        <a
          href={BIO.socials.github.url}
          target="_blank"
          className="underline inline-block mx-1 hover:text-blue-600"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}
