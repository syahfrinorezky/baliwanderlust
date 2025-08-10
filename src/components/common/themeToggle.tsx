/** @format */

"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { FaMoon, FaSun } from "react-icons/fa";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";

function ThemeToggle() {
  const isHome = usePathname() === "/";
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Button
      variant={"ghost"}
      className="relative h-10 w-10 rounded-full cursor-pointer bg-transparent hover:bg-transparent"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme">
      <FaSun
        className={clsx(
          "absolute transition-all duration-300 ease-in-out rotate-0 scale-100 dark:rotate-90 dark:scale-0",
          isHome ? "text-amber-300" : ""
        )}
      />
      <FaMoon className="absolute transition-all duration-300 ease-in-out rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
    </Button>
  );
}

export default ThemeToggle;
