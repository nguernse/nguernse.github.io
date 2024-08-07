import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";

export default function PageLayout() {
  return (
    <div className="p-5 max-w-screen-md mx-auto">
      <Navigation />

      <main>
        <Outlet />
      </main>
    </div>
  );
}
