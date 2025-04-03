import React from 'react';
import Image from 'next/image';

interface SocialLink {
  href: string;
  src: string;
  alt: string;
}

const socialLinks: SocialLink[] = [
  {
    href: 'https://www.instagram.com/nickgolebiewski/',
    src: '/svg/instagram.svg',
    alt: 'Instagram',
  },
  {
    href: 'https://twitter.com/nickdesign',
    src: '/svg/twitter-x.svg',
    alt: 'Twitter',
  },
  {
    href: 'https://github.com/ngolebiewski',
    src: '/svg/github.svg',
    alt: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/nickgolebiewski/',
    src: '/svg/linkedin.svg',
    alt: 'LinkedIn',
  },
  {
    href: 'https://nickgolebiewski.us8.list-manage.com/subscribe?u=68809da01186884c3ee48ebb8&id=feb024a580',
    src: '/svg/envelope.svg',
    alt: 'Email List',
  },
  {
    href: 'https://www.etsy.com/shop/NickGolebiewski',
    src: '/svg/etsy.svg',
    alt: 'Etsy',
  },
  {
    href: 'https://www.patreon.com/nickgolebiewski',
    src: '/svg/patreon.svg',
    alt: 'Patreon',
  },
];

const Socials: React.FC = () => {
  return (
    <footer className="w-full flex py-4">
      <div className="social-icons flex space-x-6 items-center pl-6">
        {socialLinks.map((link) => (
          <a
            key={link.alt}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-125"
          >
            <Image
              src={link.src}
              alt={link.alt}
              width={24}
              height={24}
              style={{ transform: 'scale(1.25)' }}
            />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Socials;