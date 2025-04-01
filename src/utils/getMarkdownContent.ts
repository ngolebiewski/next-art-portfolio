import fs from "fs";
import path from "path";

/**
 * Reads a Markdown file from the "public/content" directory and returns its content as a string.
 * @param filename - The name of the Markdown file (e.g., "art_cv.md").
 * @returns The Markdown content as a string.
 */
export async function getMarkdownContent(filename: string): Promise<string> {
  const markdownFilePath = path.join(process.cwd(), "public", "content", filename);
  return fs.readFileSync(markdownFilePath, "utf8");
}
