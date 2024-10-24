// app/routes/settings.tsx
import { useMatches } from "@remix-run/react";
import { Link } from "@remix-run/react";

export default function Settings() {
  // useMatches holt Daten von der übergeordneten Route (hier der Startseite "/")
  const matches = useMatches();
  const parentData = matches.find((match) => match.pathname === "/")?.data;

  return (
    <div>
      <h1>{parentData?.username}'s Settings</h1>
      <nav>
        <Link to="/">Back to home</Link>
      </nav>
      <p>Here we can change the settings.</p>
    </div>
  );
}
