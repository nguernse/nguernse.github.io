import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";

export default function RootLayout() {
  return (
    <div>
      <Navigation />

      <main className="p-5">
        <Outlet />
      </main>
    </div>
  );
}
