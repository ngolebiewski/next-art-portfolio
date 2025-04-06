import Image from "next/image";
import React from "react";

interface HeroProps {
  imageURL: string;
  altString: string;
}

const Hero: React.FC<HeroProps> = ({ imageURL, altString }) => {
  return (
    <main className="relative min-h-screen">
      <div className="absolute inset-0">
        <Image
          src={imageURL}
          alt={altString}
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="absolute inset-0 bg-black opacity-0" />
      </div>
    </main>
  );
};

export default Hero;
