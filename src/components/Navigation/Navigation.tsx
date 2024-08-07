import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="flex bg-white p-5 rounded shadow">
      <Link to="/" className="mx-2 hover:text-blue-600">
        Home
      </Link>

      <ul className="ml-auto flex gap-x-2">
        <li>
          <Link to="/about" className="mx-2 hover:text-blue-600">
            About
          </Link>
        </li>
        <li>
          <Link to="/projects" className="mx-2 hover:text-blue-600">
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
}
