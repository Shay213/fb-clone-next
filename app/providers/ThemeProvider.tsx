import { createContext, useContext, useEffect, useMemo, useState } from "react";

enum THEME {
  DARK = "dark",
  LIGHT = "light",
  SYSTEM = "system",
}

interface SetThemeObj {
  setDarkTheme: () => void;
  setLightTheme: () => void;
  setSystemTheme: () => void;
  currentTheme: string | undefined;
}

const ThemeContext = createContext<SetThemeObj | null>(null);

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

const addThemeClass = () => {
  if (
    localStorage.getItem("theme") === THEME.DARK ||
    (localStorage.getItem("theme") === THEME.SYSTEM &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState(() => {
    if (typeof localStorage !== "undefined") {
      const theme = localStorage.getItem("theme");
      if (!theme) {
        localStorage.setItem("theme", THEME.SYSTEM);
        return THEME.SYSTEM;
      }
      return theme;
    }
  });

  useEffect(() => {
    addThemeClass();
  }, [theme]);

  const setThemeObj = useMemo(() => {
    return {
      setDarkTheme: () => {
        localStorage.setItem("theme", THEME.DARK);
        setTheme(THEME.DARK);
      },
      setLightTheme: () => {
        localStorage.setItem("theme", THEME.LIGHT);
        setTheme(THEME.LIGHT);
      },
      setSystemTheme: () => {
        localStorage.setItem("theme", THEME.SYSTEM);
        setTheme(THEME.SYSTEM);
      },
      currentTheme: theme,
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={setThemeObj}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
