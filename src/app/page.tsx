// src/app/page.tsx
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/chinatown/1.jpg"
          alt="Chinatown Hero"
          fill
          style={{ objectFit: "cover" }}
          priority // Optionally add priority for initial load
        />
        <div className="absolute inset-0 bg-black opacity-0"></div> {/* Overlay */}
      </div>

      {/* Text Content */}
      {/* <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white">
        <h1 className="text-4xl font-bold mb-4">Art Portfolio</h1>
        <p className="text-lg">Welcome to my art portfolio.</p>
      </div> */}
    </main>
  );
}