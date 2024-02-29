import { useEffect, useState } from "react";

export const useTheme = (storageKey = "vite-ui-theme") => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem(storageKey)
      ? localStorage.getItem(storageKey) === "true"
      : window.matchMedia("(prefers-colo-scheme: dark)").matches;
  });
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(isDarkMode ? "dark" : "light");
    localStorage.setItem(storageKey, isDarkMode.toString());
  }, [isDarkMode, storageKey]);
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  return { isDarkMode, toggleDarkMode };
};
