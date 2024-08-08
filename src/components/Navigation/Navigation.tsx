import { Link } from "react-router-dom";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";

export default function Navigation() {
  return (
    <nav className="flex bg-white p-5 rounded shadow dark:bg-gray-800 dark:text-white dark:border dark:border-gray-700">
      <Link
        to="/"
        className="mx-2 hover:text-blue-600 dark:text-gray-100 dark:hover:text-white"
      >
        Home
      </Link>

      <div className="ml-auto flex gap-x-2 items-center">
        <ThemeSwitch />
        <Link
          to="/about"
          className="mx-2 hover:text-blue-600 dark:text-gray-100 dark:hover:text-white"
        >
          About
        </Link>
        <Link
          to="/projects"
          className="mx-2 hover:text-blue-600 dark:text-gray-100 dark:hover:text-white"
        >
          Projects
        </Link>
      </div>
    </nav>
  );
}
