import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";
import { BIO } from "../utils/constants";
import ThemeSwitch from "../components/ThemeSwitch/ThemeSwitch";

export default function PageLayout() {
  return (
    <div className="p-5 max-w-screen-md mx-auto">
      <Navigation />

      <main className="my-4">
        <Outlet />
      </main>

      <footer className="p-4 md:p-8 flex flex-row justify-between text-gray-700 dark:text-white">
        <div className="flex items-center gap-x-2">
          <span>&copy; {new Date().getFullYear()}</span>
          <ThemeSwitch />
        </div>

        <div>
          <a
            href={BIO.socials.linkedin.url}
            target="_blank"
            className="underline inline-block mx-1 hover:text-blue-600 dark:hover:text-white"
          >
            LinkedIn
          </a>
          /
          <a
            href={BIO.socials.github.url}
            target="_blank"
            className="underline inline-block mx-1 hover:text-blue-600 dark:hover:text-white"
          >
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}
