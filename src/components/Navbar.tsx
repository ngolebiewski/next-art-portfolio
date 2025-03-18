// src/components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dialog } from "@headlessui/react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { clsx } from "clsx";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [showPaintingsSubmenu, setShowPaintingsSubmenu] = useState(false); // Submenu state

  const paintingsSeries = [
    { href: "/art/paintings/chinatown", label: "Chinatown" },
    { href: "/art/paintings/streetvendors", label: "Street Vendors" },
    { href: "/art/paintings/adirondacks", label: "Adirondacks" },
  ];

  return (
    <nav className="p-4 border-b border-gray-800 bg-white">
      {/* Top section with name & hamburger */}
      <div className="flex justify-between items-center">
        <Link href="/" className="font-bold text-2xl md:text-4xl">
          NICK GOLEBIEWSKI
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {[
            { href: "/art/paintings/chinatown", label: "ART" },
            { href: "/tech", label: "TECH" },
            { href: "/about", label: "ABOUT" },
            { href: "/contact", label: "CONTACT" },
          ].map(({ href, label }) => (
            <li key={href}>
            <Link
              href={href}
              className={clsx("hover:text-blue-600 transition", {
                "text-blue-600": pathname === href,
              })}
            >
              {label}
            </Link>
          </li>
          ))}
        </ul>

        {/* Hamburger Menu - Only on Mobile */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <Bars3Icon className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Menu - Slide-in Overlay */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" aria-hidden="true" />

        <Dialog.Panel className="fixed top-0 right-0 h-full w-3/4 sm:w-1/2 bg-white shadow-lg p-5 transition-transform transform translate-x-0">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 p-2"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <XMarkIcon className="h-6 w-6 text-gray-700" />
          </button>

          {/* Mobile Nav Links */}
          <ul className="mt-8 space-y-6 text-xl">
            <li>
              <button
                onClick={() => setShowPaintingsSubmenu(!showPaintingsSubmenu)}
                className="w-full text-left p-2 rounded-lg hover:bg-gray-100 transition"
              >
                ART
              </button>
              {showPaintingsSubmenu && (
                <ul className="ml-4 mt-2">
                  <li>
                    <Link
                      href="/art/paintings/chinatown"
                      className="block px-4 py-2 rounded-lg hover:bg-gray-100 transition"
                      onClick={() => setIsOpen(false)}
                    >
                      Paintings
                    </Link>
                    <ul className="ml-4 mt-2 space-y-2">
                      {paintingsSeries.map(({ href, label }) => (
                        <li key={href}>
                          <Link
                            href={href}
                            className="block px-4 py-2 rounded-lg hover:bg-gray-100 transition"
                            onClick={() => setIsOpen(false)}
                          >
                            {label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li>
                    <Link
                      href="/art/projects"
                      className="block px-4 py-2 rounded-lg hover:bg-gray-100 transition"
                      onClick={() => setIsOpen(false)}
                    >
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/art/commissions"
                      className="block px-4 py-2 rounded-lg hover:bg-gray-100 transition"
                      onClick={() => setIsOpen(false)}
                    >
                      Commissions
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/art/cv"
                      className="block px-4 py-2 rounded-lg hover:bg-gray-100 transition"
                      onClick={() => setIsOpen(false)}
                    >
                      CV + Bio
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            {[
              { href: "/tech", label: "TECH" },
              { href: "/about", label: "ABOUT" },
              { href: "/contact", label: "CONTACT" },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={clsx("block px-2 py-2 rounded-lg hover:bg-gray-100 transition", {
                    "text-blue-600": pathname === href,}
            )}
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </Dialog.Panel>
      </Dialog>
    </nav>
  );
};

export default Navbar;








// // GOOD FOR MOBILE, BUT LETS DO BETTER AND INCORPORATE THE SIDE BAR --^
// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { Dialog } from "@headlessui/react";
// import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";

// const Navbar = () => {
//   const pathname = usePathname();
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="p-4 border-b border-gray-800 bg-white">
//       {/* Top section with name & hamburger */}
//       <div className="flex justify-between items-center">
//         <Link href="/" className="font-bold text-2xl md:text-4xl">
//           NICK GOLEBIEWSKI
//         </Link>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex space-x-6">
//           {[
//             { href: "/art/paintings/chinatown", label: "ART" },
//             { href: "/tech", label: "TECH" },
//             { href: "/about", label: "ABOUT" },
//             { href: "/contact", label: "CONTACT" },
//           ].map(({ href, label }) => (
//             <li key={href}>
//               <Link
//                 href={href}
//                 className={`hover:text-blue-600 transition ${
//                   pathname === href ? "text-blue-600" : ""
//                 }`}
//               >
//                 {label}
//               </Link>
//             </li>
//           ))}
//         </ul>

//         {/* Hamburger Menu - Only on Mobile */}
//         <button
//           className="md:hidden p-2"
//           onClick={() => setIsOpen(true)}
//           aria-label="Open menu"
//         >
//           <Bars3Icon className="h-6 w-6" />
//         </button>
//       </div>

//       {/* Mobile Menu - Slide-in Overlay */}
//       <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
//         <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" aria-hidden="true" />

//         <Dialog.Panel className="fixed top-0 right-0 h-full w-3/4 sm:w-1/2 bg-white shadow-lg p-5 transition-transform transform translate-x-0">
//           {/* Close Button */}
//           <button
//             className="absolute top-4 right-4 p-2"
//             onClick={() => setIsOpen(false)}
//             aria-label="Close menu"
//           >
//             <XMarkIcon className="h-6 w-6 text-gray-700" />
//           </button>

//           {/* Mobile Nav Links */}
//           <ul className="mt-8 space-y-6 text-xl">
//             {[
//               { href: "/art/paintings/chinatown", label: "ART" },
//               { href: "/tech", label: "TECH" },
//               { href: "/about", label: "ABOUT" },
//               { href: "/contact", label: "CONTACT" },
//             ].map(({ href, label }) => (
//               <li key={href}>
//                 <Link
//                   href={href}
//                   className={`block px-4 py-2 rounded-lg hover:bg-gray-100 transition ${
//                     pathname === href ? "text-blue-600" : ""
//                   }`}
//                   onClick={() => setIsOpen(false)}
//                 >
//                   {label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </Dialog.Panel>
//       </Dialog>
//     </nav>
//   );
// };

// export default Navbar;




////////////////////////////////////
// //GOOD - GO back to this if needed
// "use client";

// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import clsx from 'clsx';

// const Navbar = () => {
//   const pathname = usePathname();

//   return (
//     <nav className="p-4 flex justify-between items-center border-b border-gray-800">
//       <Link href="/" className="font-bold text-1xl md:text-4xl ">
//         NICK GOLEBIEWSKI
//       </Link>
//       <ul className="flex space-x-4">
//         <li>
//           <Link
//             href="/art/paintings/chinatown"
//             className={pathname.startsWith("/art") ? "text-blue-600" : ""}
//           >
//             ART
//           </Link>
//         </li>
//         <li>
//           <Link
//             href="/tech"
//             className={pathname === "/tech" ? "text-blue-600" : ""}
//           >
//             TECH
//           </Link>
//         </li>
//         <li>
//           <Link
//             href="/about"
//             className={pathname === "/about" ? "text-blue-600" : ""}
//           >
//             ABOUT
//           </Link>
//         </li>
//         <li>
//           <Link
//             href="/contact"
//             className={pathname === "/contact" ? "text-blue-600" : ""}
//           >
//             CONTACT
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;














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



////////////////////////////
// // MOBILE-ISH BUT WEIRD

// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { Dialog } from "@headlessui/react";
// import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";

// const Navbar = () => {
//   const pathname = usePathname();
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="p-4 border-b border-gray-800">
//       {/* Top section with name & hamburger */}
//       <div className="flex justify-between items-center">
//         <Link href="/" className="font-bold text-2xl md:text-4xl">
//           NICK GOLEBIEWSKI
//         </Link>

//         {/* Hamburger Menu - Only on Mobile */}
//         <button
//           className="md:hidden p-2"
//           onClick={() => setIsOpen(true)}
//           aria-label="Open menu"
//         >
//           <Bars3Icon className="h-6 w-6" />
//         </button>
//       </div>

//       {/* Mobile Menu - Dialog from headless UI */}
//       <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="md:hidden">
//         <Dialog.Panel className="fixed inset-0 bg-black bg-opacity-90 p-4 flex flex-col items-center space-y-4">
//           {/* Close Button */}
//           <button
//             className="absolute top-4 right-4 p-2"
//             onClick={() => setIsOpen(false)}
//             aria-label="Close menu"
//           >
//             <XMarkIcon className="h-6 w-6 text-white" />
//           </button>

//           {/* Mobile Nav Links */}
//           <ul className="flex flex-col space-y-4 text-white text-2xl">
//             {[
//               { href: "/art/paintings/chinatown", label: "ART" },
//               { href: "/tech", label: "TECH" },
//               { href: "/about", label: "ABOUT" },
//               { href: "/contact", label: "CONTACT" },
//             ].map(({ href, label }) => (
//               <li key={href}>
//                 <Link
//                   href={href}
//                   className={pathname === href ? "text-blue-400" : ""}
//                   onClick={() => setIsOpen(false)}
//                 >
//                   {label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </Dialog.Panel>
//       </Dialog>

//       {/* Desktop Menu */}
//       <ul className="hidden md:flex space-x-4">
//         <li>
//           <Link
//             href="/art/paintings/chinatown"
//             className={pathname.startsWith("/art") ? "text-blue-600" : ""}
//           >
//             ART
//           </Link>
//         </li>
//         <li>
//           <Link href="/tech" className={pathname === "/tech" ? "text-blue-600" : ""}>
//             TECH
//           </Link>
//         </li>
//         <li>
//           <Link href="/about" className={pathname === "/about" ? "text-blue-600" : ""}>
//             ABOUT
//           </Link>
//         </li>
//         <li>
//           <Link href="/contact" className={pathname === "/contact" ? "text-blue-600" : ""}>
//             CONTACT
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
