import { GiSpellBook } from "react-icons/gi";
import { SiGithub } from "react-icons/si";
import { HiMiniMoon } from "react-icons/hi2";
import { useTheme } from "@/hooks/useThemes";

export function Navbar() {
  return (
    <header className="sticky top-0 z-10 w-full border-b rounded-bl-2xl rounded-br-2xl bg-white dark:border-gray-700 dark:bg-gray-900">
      <div className="flex h-16 items-center px-4 sm:px-8 lg:px-44">
        <div className="mx-auto w-full max-w-3x1 space-y-20">
          <div className="flex justify-between">
            <div className="flex flex-1 items-center justify-start">
              <a
                className="h-10 w-10 p-2 text-gray-800 dark:text-white"
                href="/"
              >
                <GiSpellBook className="size-full" />
              </a>
            </div>
            <div className="flex flex-1 items-center justify-end">
              <nav className="flex items-center space-x-1">
                <ThemeToggle />

                <a
                  href="https://www.github.com/sssmaran"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 p-2 text-gray-800 hover:text-[#4078c0] dark:text-white dark:hover:text-[#4078c0]"
                >
                  <SiGithub className="h-full w-full" />
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function ThemeToggle() {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <button
      aria-label="Toggle Dark Mode"
      className="h-10 w-10 p-2 text-gray-800 hover:text-amber-500 dark:text-white dark:hover:text-amber-400"
      onClick={() => toggleDarkMode()}
    >
      {isDarkMode ? (
        <HiMiniMoon className="h-full w-full" />
      ) : (
        <HiMiniMoon className="h-full w-full" />
      )}
    </button>
  );
}
