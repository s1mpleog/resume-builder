"use client";

import { cx } from "@/lib/cx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TopNavbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  return (
    <header
      aria-label="Site Header"
      className={cx(
        "flex h-[var(--top-nav-bar-height)] items-center border-b-2 border-gray-100 px-3 lg:px-12",
        isHomePage && "bg-dot"
      )}
    >
      <div className="flex h-10 w-full items-center justify-between">
        <Link href="/">
          <h2 className="text-xl text-primary">Resume Builder and Parser</h2>
        </Link>
        <nav
          aria-label="Site Navbar"
          className="flex items-center gap-2 text-sm font-medium"
        >
          {[
            ["/resume-builder", "Builder"],
            ["/resume-parser", "Parser"],
          ].map(([href, text]) => (
            <Link
              key={text}
              href={href}
              className="rounded-md px-1.5 py-2 text-green-500 hover:bg-gray-100 focus-visible:bg-gray-100 lg:px-4"
            >
              {text}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
