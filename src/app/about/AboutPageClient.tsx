"use client";

import { useEffect, useState } from "react";
import figlet from "figlet";
import MarkdownRenderer from "@/components/MarkdownRenderer";

const AboutPageClient = ({ markdownContent }: { markdownContent: string | null }) => {
  const [figletText, setFigletText] = useState<string>("");

  useEffect(() => {
    figlet.text("About Me", { font: "Larry 3D" }, (err, data) => {
      if (err) {
        console.error("Failed to generate figlet text:", err);
        setFigletText("About Me");
        return;
      }
      setFigletText(data || "About Me");
    });
  }, []);

  return (
    <div>
      <pre>{figletText}</pre>
      {markdownContent && <MarkdownRenderer content={markdownContent} />}
      {!markdownContent && <p>Failed to load about content.</p>}
    </div>
  );
};

export default AboutPageClient;
