// context using useState

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';

interface Context {
  isDarkMode: boolean;
  setIsDarkMode: Dispatch<SetStateAction<boolean>>;
}

const ThemeContext: React.Context<Context | undefined> = createContext<Context | undefined>(undefined);

type Props = {
  children: ReactNode;
};

const ThemeProvider = ({ children }: Props) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const value = { isDarkMode, setIsDarkMode };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

// instead of calling useContext directly in our components,
// we make our own hook that throws an error if we try to
// access context outside of the provider
const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error(
      '[ThemeProvider] useTheme must be used within a ThemeProvider'
    );
  }
  return context;
};

export { ThemeProvider, useTheme };
