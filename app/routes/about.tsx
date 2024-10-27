// app/routes/settings.tsx
import { useMatches, useRouteLoaderData } from "@remix-run/react";
import { Link } from "@remix-run/react";
import { type loader as parentLoader } from "./_index";

  

export default function Settings() {
  // useMatches holt Daten von der übergeordneten Route (hier der Startseite "/")
  const matches = useMatches();
 
  const parentData = useRouteLoaderData<typeof parentLoader>("routes/index");
  
  return (
    <div>
      <h1>{parentData?.username}'s about page</h1>
      <nav>
        <Link to="/">Back to home</Link>
      </nav>
      <p>Here we should be see the about page.</p>
    </div>
  );
}

