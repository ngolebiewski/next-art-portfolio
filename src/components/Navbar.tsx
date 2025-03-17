// src/components/Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="p-4 flex justify-between items-center">
      <div className="text-xl font-bold">Nick Golebiewski</div>
      <ul className="flex space-x-4">
        <li>
          <Link href="/art">ART</Link>
        </li>
        <li>
          <Link href="/tech">TECH</Link>
        </li>
        <li>
          <Link href="/about">ABOUT</Link>
        </li>
        <li>
          <Link href="/contact">CONTACT</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;