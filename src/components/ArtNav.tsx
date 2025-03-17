// // src/components/ArtNav.tsx
import Link from 'next/link';

const ArtNav = () => {
  return (
    <nav className="p-4 flex space-x-4">
      <Link href="/art/paintings">Paintings</Link>
      <Link href="/art/projects">Projects</Link>
      <Link href="/art/commissions">Commissions</Link>
      <Link href="/art/cv">CV + Bio</Link>
    </nav>
  );
};

export default ArtNav;


//VERTICAL
// src/components/ArtNav.tsx
// import Link from 'next/link';

// const ArtNav = () => {
//   return (
//     <nav className="flex flex-col p-2">
//       <Link href="/art/paintings/" className="p-2 hover:bg-gray-100">
//         Paintings
//       </Link>
//       <Link href="/art/projects/" className="p-2 hover:bg-gray-100">
//         Projects
//       </Link>
//       <Link href="/art/commissions/" className="p-2 hover:bg-gray-100">
//         Commissions
//       </Link>
//       <Link href="/art/cv/" className="p-2 hover:bg-gray-100">
//         CV + Bio
//       </Link>
//     </nav>
//   );
// };

// export default ArtNav;