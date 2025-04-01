import React from "react";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import { getMarkdownContent } from "@/utils/getMarkdownContent";


export default async function CvPage() {
  const markdownContent = await getMarkdownContent("art_cv.md");

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Curriculum Vitae (Artist)</h1>
      <MarkdownRenderer content={markdownContent} />
    </div>
  );
}
