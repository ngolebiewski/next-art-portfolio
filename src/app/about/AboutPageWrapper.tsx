// src/app/about/AboutPageWrapper.tsx
"use client";

import dynamic from "next/dynamic";

// Dynamically load the Client Component with SSR disabled
const AboutPageClient = dynamic(() => import("./AboutPageClient"), { ssr: false });

const AboutPageWrapper = ({ markdownContent }: { markdownContent: string | null }) => {
  return <AboutPageClient markdownContent={markdownContent} />;
};

export default AboutPageWrapper;
