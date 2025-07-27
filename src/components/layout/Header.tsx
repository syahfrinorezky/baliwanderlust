"use client";

import { useScroll } from "@/hooks/useScroll";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAVIGATIONS } from "../../constants/navigations";
import ThemeToggle from "../common/themeToggle";
import { Button } from "../ui/button";

function Header() {
  const isScrolled = useScroll();
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 p-4 transition-all duration-300 ease-in-out",
        isHomePage
          ? "bg-transparent backdrop-blur-sm"
          : isScrolled
          ? "bg-white/20 dark:bg-neutral-800/20 backdrop-blur-sm"
          : "bg-white text-neutral-900 dark:bg-neutral-800 dark:text-white shadow-md shadow-gray-300 dark:shadow-none"
      )}>
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <Image
            src={"/icons/bw-default.svg"}
            width={40}
            height={40}
            alt="Bali Wanderlust company logo"
            title="Bali Wanderlust - Home"
            priority
          />
        </Link>

        <ul className="flex items-center gap-3">
          {NAVIGATIONS.map((nav) => (
            <li key={nav.href}>
              <Button
                variant={"ghost"}
                asChild
                className={clsx(
                  "transition-all duration-300 ease-in-out",
                  pathname === nav.href
                    ? isHomePage
                      ? "text-yellow-500 hover:text-yellow-500 hover:bg-transparent dark:hover:bg-transparent"
                      : isScrolled
                      ? "bg-transparent text-yellow-500"
                      : "text-yellow-500 bg-neutral-200 hover:text-yellow-500 hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-900"
                    : isHomePage
                    ? "text-white hover:text-yellow-500 hover:bg-transparent dark:hover:bg-transparent"
                    : isScrolled
                    ? "hover:bg-transparent dark:hover:bg-transparent hover:text-yellow-500"
                    : "hover:text-yellow-500 hover:bg-neutral-200 dark:hover:bg-neutral-900"
                )}>
                <Link href={nav.href}>{nav.name}</Link>
              </Button>
            </li>
          ))}
        </ul>

        <ThemeToggle />
      </div>
    </nav>
  );
}

export default Header;
