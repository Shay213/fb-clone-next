import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

createContext;

enum THEME {
  DARK = "dark",
  LIGHT = "light",
  SYSTEM = "system",
}

const ThemeContext = createContext({});

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState(THEME.SYSTEM);

  const setThemeObj = useMemo(() => {
    return {
      setDarkTheme: setTheme(THEME.DARK),
      setLightTheme: setTheme(THEME.LIGHT),
      setSystemTheme: setTheme(THEME.SYSTEM),
    };
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setThemeObj }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
