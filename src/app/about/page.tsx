// src/app/about/page.tsx
import { getMarkdownContent } from "@/utils/getMarkdownContent";
import AboutPageWrapper from "./AboutPageWrapper"; // This will be a client component

export default async function AboutPage() {
  let markdownContent: string | null = null;
  try {
    markdownContent = await getMarkdownContent("about.md");
  } catch (error) {
    console.error("Error fetching markdown content:", error);
  }

  return <AboutPageWrapper markdownContent={markdownContent} />;
}
