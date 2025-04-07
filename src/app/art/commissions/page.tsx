import Hero from "@/components/Hero";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import { getMarkdownContent } from "@/utils/getMarkdownContent";

export default async function CommissionsPage() {
  const markdownContent = await getMarkdownContent("commissions.md");

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Commissions</h1>
      <MarkdownRenderer content={markdownContent} />
      <br />
      <Hero imageURL="/images/nyc/strand_bookstore_1200x1200.jpg" altString="Strand Bookstore in NYC" />
    </div>
  );
}