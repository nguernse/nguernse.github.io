import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  let message = "Something unexpected happened.";

  if (isRouteErrorResponse(error)) {
    switch (error.status) {
      case 404:
        message =
          error.statusText ||
          "Looks like you tried to visit a page that does not exist.";
        break;
    }

    return (
      <div className="h-screen w-screen flex justify-center items-center text-center">
        <header className="flex flex-col gap-y-2">
          <h1 className="text-4xl font-bold text-slate-700">{error.status}</h1>
          <p className="font-medium text-lg">{message}</p>

          <Link
            to="/"
            className="inline-block px-3 py-2 rounded bg-blue-500 text-white"
          >
            Return Home
          </Link>
        </header>
      </div>
    );
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center text-center">
      <header className="flex flex-col gap-y-2">
        <h1 className="text-4xl font-bold text-slate-700">Error</h1>
        <p className="font-medium text-lg">{message}</p>

        <Link
          to="/"
          className="inline-block px-3 py-2 rounded bg-blue-500 text-white"
        >
          Return Home
        </Link>
      </header>
    </div>
  );
}
