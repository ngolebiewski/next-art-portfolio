// app/tech/page.tsx
import TechProjects from "./TechProjects";

export default async function TechPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/tech-project`, {
    next: { revalidate: 86400 }, // cache for 1 day
  });
  const projects = await res.json();

  return (
    <div className="p-6 tech-projects">
      <h1 className="text-2xl font-bold my-2">Technology Projects</h1>
      <TechProjects projects={projects} />
    </div>
  );
}
