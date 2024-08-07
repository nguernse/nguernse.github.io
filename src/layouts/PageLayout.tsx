import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";
import { BIO } from "../utils/constants";

export default function PageLayout() {
  return (
    <div className="p-5 max-w-screen-md mx-auto">
      <Navigation />

      <main className="my-4">
        <Outlet />
      </main>

      <footer className="p-4 md:p-8 flex flex-row justify-between text-slate-400">
        <span>&copy; 2025</span>

        <div>
          <a
            href={BIO.socials.linkedin.url}
            target="_blank"
            className="underline inline-block mx-1 hover:text-blue-600"
          >
            LinkedIn
          </a>
          /
          <a
            href={BIO.socials.github.url}
            target="_blank"
            className="underline inline-block mx-1 hover:text-blue-600"
          >
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}
