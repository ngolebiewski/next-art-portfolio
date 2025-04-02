import Image from "next/image"; // Import Next.js Image component

const Socials = () => {
  return (
    <footer className="w-full flex py-4">
      <div className="social-icons flex space-x-6 items-center pl-6">
        <a
          href="https://www.instagram.com/nickgolebiewski/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-125"
        >
          <Image
            src="/svg/instagram.svg" // Use relative path from public directory
            alt="Instagram"
            width={24} // Specify width
            height={24} // Specify height
            style={{ transform: "scale(1.25)" }}
          />
        </a>

        <a
          href="https://twitter.com/nickdesign"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-125"
        >
          <Image
            src="/svg/twitter-x.svg" // Use relative path from public directory
            alt="Twitter"
            width={24} // Specify width
            height={24} // Specify height
            style={{ transform: "scale(1.25)" }}
          />
        </a>

        <a
          href="https://github.com/ngolebiewski"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-125"
        >
          <Image
            src="/svg/github.svg" // Use relative path from public directory
            alt="GitHub"
            width={24} // Specify width
            height={24} // Specify height
            style={{ transform: "scale(1.25)" }}
          />
        </a>

        <a
          href="https://www.linkedin.com/in/nickgolebiewski/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-125"
        >
          <Image
            src="/svg/linkedin.svg" // Use relative path from public directory
            alt="LinkedIn"
            width={24} // Specify width
            height={24} // Specify height
            style={{ transform: "scale(1.25)" }}
          />
        </a>

        <a
          href="https://nickgolebiewski.us8.list-manage.com/subscribe?u=68809da01186884c3ee48ebb8&id=feb024a580"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-125"
        >
          <Image
            src="/svg/envelope.svg" // Use relative path from public directory
            alt="Email List"
            width={24} // Specify width
            height={24} // Specify height
            style={{ transform: "scale(1.25)" }}
          />
        </a>

        <a
          href="https://www.etsy.com/shop/NickGolebiewski"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-125"
        >
          <Image
            src="/svg/etsy.svg" // Use relative path from public directory
            alt="Etsy"
            width={24} // Specify width
            height={24} // Specify height
            style={{ transform: "scale(1.25)" }}
          />
        </a>

        <a
          href="https://www.patreon.com/nickgolebiewski"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-125"
        >
          <Image
            src="/svg/patreon.svg" // Use relative path from public directory
            alt="Patreon"
            width={24} // Specify width
            height={24} // Specify height
            style={{ transform: "scale(1.25)" }}
          />
        </a>
      </div>
    </footer>
  );
};

export default Socials;
