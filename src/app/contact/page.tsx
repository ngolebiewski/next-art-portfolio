import Socials from "@/components/Socials";
import Image from "next/image";
// Nice image for background
// public/images/chinatown/6.jpg
//or this gif
// public/images/tech-projects/ca1.gif

const ContactPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold my-2">Contact</h1>
      <p>Email: z@nickgolebiewski.com</p>
      <h1 className="text-2xl font-bold my-2">
        Connect on Socia Media/Online
      </h1>
      <Socials />
      <main className="relative min-h-screen">
        {/* Hero Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/tech-projects/ca1.gif"
            alt="automata Hero"
            fill
            style={{ objectFit: "cover" }}
            priority // Optionally add priority for initial load
          />
          <div className="absolute inset-0 bg-black opacity-0"></div>{" "}
          {/* Overlay */}
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
