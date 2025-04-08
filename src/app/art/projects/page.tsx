import Hero from "@/components/Hero";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import { getMarkdownContent } from "@/utils/getMarkdownContent";

export const revalidate = 86400; // 24 hours in seconds

function daysSince2014(): number {
  const startDate = new Date("2014-01-01");
  const currentDate = new Date();

  // Calculate the difference in milliseconds
  const diffInMillis = currentDate.getTime() - startDate.getTime();

  // Convert milliseconds to days
  const diffInDays = diffInMillis / (1000 * 3600 * 24);

  return Math.floor(diffInDays); // Return the integer number of days
}

export default async function ProjectsPage() {
  const markdownContent = await getMarkdownContent("drawing-a-day.md");

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-bold mb-4">Projects</h1>

      <section className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600 text-white p-8 rounded-2xl shadow-xl tech-projects">
        <h2 className="text-4xl font-bold text-center mb-4 tracking-tight">
          Drawing-a-Day Streak
        </h2>
        <p className="text-xl text-center">
          Nick has made a drawing each day for{" "}
          <span className="font-extrabold text-5xl text-yellow-400">
            {daysSince2014().toLocaleString()}
          </span>{" "}
          days!
        </p>
        <div className="mt-6 flex justify-center items-center">
          <div className="w-24 h-1 bg-yellow-400 rounded-full"></div>
        </div>
      </section>

      <MarkdownRenderer content={markdownContent} />

      <Hero
        imageURL="/images/nyc/wsp_nlbs.jpg"
        altString="Watercolor sketch of Washington Square Park held up in front of the scene in the park."
      />
    </div>
  );
}
