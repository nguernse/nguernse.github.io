import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="max-w-screen-md mx-auto">
      <main className="p-5">
        <Outlet />
      </main>
    </div>
  );
}
