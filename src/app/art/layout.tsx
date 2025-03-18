// src/app/art/layout.tsx
import Sidebar from '@/components/Sidebar';

export default function ArtLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
        {/* Sidebar (Hidden on Mobile) */}
        <aside className="hidden md:block">
        <Sidebar />
      </aside>

      <main className="flex-1 p-4">{children}</main>
    </div>
  );
}