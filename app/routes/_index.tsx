// app/routes/index.tsx
import { Link } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

// Loader-Funktion, um Daten für die Startseite bereitzustellen
export const loader: LoaderFunction = () => {
  return json({ username: "Patrick" });
};

export default function Index() {
  const data = useLoaderData<{ username: string }>();

  return (
    <div>
      <h1>{data.username}'s homepage</h1>
      <nav>
        <Link to="/settings">Go to settings</Link>
      </nav>
    </div>
  );
}
