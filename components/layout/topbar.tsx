"use client";

import { UserButton } from "@clerk/nextjs";

export function Topbar() {
  return (
    <header className="flex h-12 items-center justify-between border-b bg-white px-3">
      <input
        className="h-8 w-64 rounded border px-2 text-sm"
        placeholder="Search"
      />
      <UserButton afterSignOutUrl="/sign-in" />
    </header>
  );
}
