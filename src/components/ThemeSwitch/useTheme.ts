import { useCallback, useEffect, useState } from "react";

type Theme = 'light' | 'dark';

export default function useTheme(): [Theme, () => void] {
  const [theme, setTheme] = useState<Theme>('light');

  const handleSetTheme = useCallback((currentTheme: Theme) => {
    switch (currentTheme) {
      case 'dark': {
        localStorage.setItem('theme', 'dark');
        document.body.classList.add('dark');
        setTheme('dark');
        break;
      }
      case 'light':
      default: {
        localStorage.setItem('theme', 'light');
        document.body.classList.remove('dark');
        setTheme('light');
        break;
      }
    }
  }, []);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as Theme | null;

    let initialTheme: Theme;

    if (storedTheme) {
      initialTheme = storedTheme;
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      initialTheme = prefersDark ? 'dark' : 'light';
    }

    setTheme(initialTheme);

    if (initialTheme === 'dark') {
      document.body.classList.add('dark');
    }
  }, [handleSetTheme]);

  const toggleTheme = () => {
    switch (theme) {
      case 'dark': {
        handleSetTheme('light');
        break;
      }
      case 'light':
      default: {
        handleSetTheme('dark');
        break;
      }
    }
  }

  return [theme, toggleTheme];
}