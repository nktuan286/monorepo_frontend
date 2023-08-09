import {
  PropsWithChildren, useState, createContext, useMemo, Dispatch, SetStateAction,
} from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../Styles/GlobalStyle';
import {
  lightTheme, darkTheme,
} from '../Styles';

type ThemeContextType = {
  theme: number;
  setTheme: Dispatch<SetStateAction<number>>;
  toggleTheme: (themeNumber: number) => void;
}

const defaultThemeContext = {
  theme: 0,
  setTheme: () => {},
  toggleTheme: () => {},
};

export const ThemeContext = createContext<ThemeContextType>(defaultThemeContext);

const Themes = [
  lightTheme,
  darkTheme,
];

export function Theme({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState(0);
  const toggleTheme = (themeNumber: number) => setTheme(themeNumber);

  const themeValue = useMemo(() => ({ theme, setTheme, toggleTheme }), [theme]);

  return (
    <ThemeContext.Provider value={themeValue}>
      <ThemeProvider theme={Themes[theme]}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
