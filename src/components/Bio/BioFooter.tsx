import { Bio } from "../../@types";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";

type Props = {
  socials: Bio["socials"];
};

export default function BioFooter({ socials }: Props) {
  return (
    <footer className="p-4 md:p-8 bg-gray-50 rounded flex flex-col md:flex-row md:justify-between md:items-center text-gray-700 dark:bg-gray-900 dark:border dark:border-gray-700 dark:text-white">
      <div className="flex items-center gap-x-2">
        <span>&copy; {new Date().getFullYear()}</span>
        <ThemeSwitch />
      </div>

      <div>
        <a
          href={socials.linkedin.url}
          target="_blank"
          className="underline inline-block mx-1 hover:text-blue-600 dark:hover:text-white"
        >
          LinkedIn
        </a>
        /
        <a
          href={socials.github.url}
          target="_blank"
          className="underline inline-block mx-1 hover:text-blue-600 dark:hover:text-white"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}
