// src/components/Navbar.tsx
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="p-4 flex justify-between items-center border-b border-gray-800">
      <Link href="/" className="text-4xl font-bold">
        NICK GOLEBIEWSKI
      </Link>
      <ul className="flex space-x-4">
        <li>
          <Link
            href="/art/paintings/chinatown"
            className={pathname.startsWith("/art") ? "text-blue-600" : ""}
          >
            ART
          </Link>
        </li>
        <li>
          <Link
            href="/tech"
            className={pathname === "/tech" ? "text-blue-600" : ""}
          >
            TECH
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={pathname === "/about" ? "text-blue-600" : ""}
          >
            ABOUT
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className={pathname === "/contact" ? "text-blue-600" : ""}
          >
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;


// SUPER BASIC VERSION _ NICE!
// // src/components/Navbar.tsx
// import Link from 'next/link';

// const Navbar = () => {
//   return (
//     <nav className="p-4 flex justify-between items-center">
//       <Link href="/" className="text-xl font-bold">
//         Artist Name
//       </Link>
//       <ul className="flex space-x-4">
//         <li>
//           <Link href="/art/paintings/">ART</Link>
//         </li>
//         <li>
//           <Link href="/tech">TECH</Link>
//         </li>
//         <li>
//           <Link href="/about">ABOUT</Link>
//         </li>
//         <li>
//           <Link href="/contact">CONTACT</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;