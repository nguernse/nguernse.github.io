import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="flex p-5 bg-slate-100">
      <ul className="ml-auto flex gap-x-2">
        <li>
          <Link to="/" className="mx-2 hover:text-sky-500">
            Home
          </Link>
          <Link to="/projects" className="mx-2 hover:text-sky-500">
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
}
