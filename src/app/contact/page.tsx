import Socials from "@/components/Socials";
import Hero from "@/components/Hero";

// Nice image for background
// public/images/chinatown/6.jpg
//or this gif
// public/images/tech-projects/ca1.gif

const ContactPage = () => {
  return (
    <>
      <div className="p-4 space-y-6">
        <h1 className="text-2xl font-bold my-2">Contact</h1>
        <p>Email: z@nickgolebiewski.art</p>
        <h1 className="text-2xl font-bold my-2">
          Connect on Social Media/Online
        </h1>
        <Socials />
      </div>
      <Hero
        imageURL="/images/tech-projects/ca1.gif"
        altString="cellular automata"
      />
    </>
  );
};

export default ContactPage;
