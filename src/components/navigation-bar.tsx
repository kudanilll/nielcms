"use client";

import { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";

function formatHash(hash: string) {
  const words = hash.split("-");
  return words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

export default function NavigationBar() {
  const [hash, setHash] = useState<string>("");

  useEffect(() => {
    function updateHash() {
      const currentHash = window.location.hash.replace("#", "");
      setHash(formatHash(currentHash));
    }
    updateHash();

    window.addEventListener("hashchange", updateHash);

    return () => {
      window.removeEventListener("hashchange", updateHash);
    };
  }, []);

  return (
    <div className="w-full fixed top-0 z-50 bg-background">
      <div className="m-4">
        <h1 className="mb-5">{hash || "Dashboard"}</h1>
      </div>
      <Separator />
    </div>
  );
}
