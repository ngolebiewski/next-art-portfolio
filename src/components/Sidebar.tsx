// src/components/Sidebar.tsx
"use client";

import { useState, useRef } from 'react';
import NavItem from './NavItem';

const Sidebar = () => {
  const [showPaintingsSubmenu, setShowPaintingsSubmenu] = useState(false);
  const submenuRef = useRef<HTMLUListElement>(null);

  const paintingsSeries = [
    { href: "/art/paintings/chinatown", label: "Chinatown" },
    { href: "/art/paintings/street-vendors", label: "Street Vendors" },
    { href: "/art/paintings/adirondacks", label: "Adirondacks" },
  ];

  const submenuHeight = submenuRef.current && showPaintingsSubmenu
    ? submenuRef.current.scrollHeight + "px"
    : "0px";

  return (
    <aside className="w-64 bg-white border-r p-4 h-screen transition-transform duration-300">
      <nav>
        <ul className="space-y-2">
          <li>
            <button
              onClick={() => setShowPaintingsSubmenu(!showPaintingsSubmenu)}
              className="w-full text-left p-2 rounded hover:bg-gray-100 transition-colors duration-200"
            >
              Paintings
            </button>
            <ul
              ref={submenuRef}
              className="ml-4 space-y-1 transition-all duration-300 ease-in-out overflow-hidden"
              style={{ height: submenuHeight }}
            >
              {paintingsSeries.map((series) => (
                <li key={series.href}>
                  <NavItem href={series.href} label={series.label} />
                </li>
              ))}
            </ul>
          </li>
          <li>
            <NavItem href="/art/projects" label="Projects" />
          </li>
          <li>
            <NavItem href="/art/commissions" label="Commissions" />
          </li>
          <li>
            <NavItem href="/art/cv" label="CV" />
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;