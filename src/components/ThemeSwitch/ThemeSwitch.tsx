import { MoonStar, Sun } from "lucide-react";
import useTheme from "./useTheme";

export default function ThemeSwitch() {
  const [theme, toggleTheme] = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="inline-flex items-center justify-center w-7 h-7 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
      aria-label={
        theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
      }
      type="button"
    >
      {theme === "light" && (
        <MoonStar
          className="w-5"
          aria-hidden={true}
          role="img"
          focusable={false}
        />
      )}
      {theme === "dark" && (
        <Sun className="w-5" aria-hidden={true} role="img" focusable={false} />
      )}
    </button>
  );
}
