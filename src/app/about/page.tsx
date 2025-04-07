// src/app/about/page.tsx
import { getMarkdownContent } from "@/utils/getMarkdownContent";
import AboutPageWrapper from "./AboutPageWrapper"; // This will be a client component

export const metadata = {
  title: "Nick Golebiewski – Artist & Software Engineer",
  description: "Learn more about Nick Golebiewski, a Brooklyn Navy Yard-based artist and full stack developer.",
  keywords: ["Nick Golebiewski", "artist", "software engineer", "Brooklyn Navy Yard", "Nick’s Lunchbox Service"],
  authors: [{ name: "Nick Golebiewski" }],
  openGraph: {
    title: "About Nick Golebiewski",
    description: "Artist and software engineer blending tech and hand-made art in NYC.",
    url: "https://nickgolebiewski.art/about",
    siteName: "Nick Golebiewski",
    images: [
      {
        url: "https://nickgolebiewski.art/images/chinatown/1.jpg",
        width: 1200,
        height: 800,
        alt: "Nick Golebiewski's Chinatown - Grand Street Painting",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nick Golebiewski",
    description: "About page for Nick Golebiewski",
    images: ["https://nickgolebiewski.art/images/bio/Nick-studio-portrait-artwork-background-web.jpg"],
  },
};

export default async function AboutPage() {
  let markdownContent: string | null = null;
  try {
    markdownContent = await getMarkdownContent("about.md");
  } catch (error) {
    console.error("Error fetching markdown content:", error);
  }

  return <AboutPageWrapper markdownContent={markdownContent} />;
}
