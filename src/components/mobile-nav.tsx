"use client";

import { useState } from "react";

const navLinks = [
  { label: "I'm an Investor", href: "#" },
  { label: "I'm a Founder", href: "#" },
  { label: "How It Works", href: "#" },
  { label: "Evidence", href: "#" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center justify-center h-10 w-10 rounded text-brand-navy hover:bg-surface-container-low transition-colors"
      >
        <span className="material-symbols-outlined text-[24px]">
          {open ? "close" : "menu"}
        </span>
      </button>
      <div
        className={`absolute left-0 right-0 top-full bg-surface border-b border-outline-variant shadow-md overflow-hidden transition-[max-height] duration-300 ${
          open ? "max-h-80" : "max-h-0 border-b-0 shadow-none"
        }`}
      >
        <nav className="flex flex-col px-margin-mobile py-sm gap-xs">
          {navLinks.map((link) => (
            <a
              key={link.label}
              className="text-on-surface-variant font-medium hover:text-secondary transition-colors duration-200 font-label-md text-label-md py-xs"
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
