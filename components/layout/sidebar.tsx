"use client";

import { useUIStore } from "@/store/ui";
import Link from "next/link";

export function Sidebar() {
  const { sidebarOpen, toggleSidebar } = useUIStore();
  return (
    <aside
      className={`${
        sidebarOpen ? "w-56" : "w-14"
      } transition-all border-r bg-white`}
    >
      <div className="flex items-center justify-between p-2">
        <button onClick={toggleSidebar} className="text-sm">
          ☰
        </button>
        {sidebarOpen && <span className="text-sm font-semibold">CMS</span>}
      </div>
      <nav className="space-y-1 p-2 text-sm">
        <Link
          href="/dashboard"
          className="block px-2 py-1 hover:bg-neutral-100"
        >
          Dashboard
        </Link>
        <Link href="/posts" className="block px-2 py-1 hover:bg-neutral-100">
          Posts
        </Link>
        <Link href="/media" className="block px-2 py-1 hover:bg-neutral-100">
          Media
        </Link>
        <Link href="/users" className="block px-2 py-1 hover:bg-neutral-100">
          Users
        </Link>
        <Link href="/settings" className="block px-2 py-1 hover:bg-neutral-100">
          Settings
        </Link>
        <Link href="/logs" className="block px-2 py-1 hover:bg-neutral-100">
          Logs
        </Link>
      </nav>
    </aside>
  );
}
