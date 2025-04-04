"use client";

import { useEffect, useState } from "react";
import figlet, { Fonts } from "figlet"; // Import Fonts type
import MarkdownRenderer from "@/components/MarkdownRenderer";

const AboutPageClient = ({ markdownContent }: { markdownContent: string | null }) => {
  const [figletText, setFigletText] = useState<string>("");
  const fonts: Fonts[] = ["Larry 3D", "Doom", "Graffiti", "Isometric1", "Isometric2", "Isometric3", "Isometric4", "Ogre", "Small"]; // Specify the type as Fonts[]

  function getRandomElement(arr: Fonts[]): Fonts { // Specify the type as Fonts[] and return type as Fonts
    if (arr.length === 0) {
      return "Larry 3D";
    }
    const randomIndex = Math.floor(Math.random() * arr.length);
    console.log(arr[randomIndex]);
    return arr[randomIndex];
  }


  useEffect(() => {
    const randomFont = getRandomElement(fonts);
    figlet.text("About Me", randomFont, (err, data) => { // Pass randomFont directly as the font argument
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