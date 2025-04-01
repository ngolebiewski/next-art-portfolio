import MarkdownRenderer from "@/components/MarkdownRenderer";
import { getMarkdownContent } from "@/utils/getMarkdownContent";

export default async function CommissionsPage() {
  const markdownContent = await getMarkdownContent("commissions.md");

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Commissions</h1>
      <MarkdownRenderer content={markdownContent} />
    </div>
  );
}