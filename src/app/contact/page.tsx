import Socials from "@/components/Socials";
import Hero from "@/components/Hero";
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
        Connect on Social Media/Online
      </h1>
      <Socials />
      <Hero imageURL="/images/tech-projects/ca1.gif" altString = "cellular automata" />
    </div>
  );
};

export default ContactPage;
