"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "Fitur", href: "#features" },
  { label: "Cara Kerja", href: "#how-it-works" },
  { label: "Testimoni", href: "#testimonials" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-12">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-4">
              <Image
                src="/icon-512.png"
                alt="NCMS Logo"
                width={36}
                height={36}
                className="rounded-lg"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              className="text-muted-foreground hover:text-foreground"
            >
              Login
            </Button>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Mulai Gratis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              className="p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <Button variant="ghost" className="justify-start">
                  Login
                </Button>
                <Button className="bg-primary text-primary-foreground">
                  Mulai Gratis
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
