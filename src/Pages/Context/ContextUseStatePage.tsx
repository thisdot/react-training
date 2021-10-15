import { ThemeProvider, useTheme } from "../../Context/themeContext"

const ThemeDisplay = () => {
  const { isDarkMode } = useTheme();
  return <h2>Is it dark mode? {isDarkMode ? 'Yes' : 'No'}</h2>
}

const ThemeSwitcher = () => {
  const { isDarkMode, setIsDarkMode } = useTheme();
  return (
    <button onClick={() => setIsDarkMode(!isDarkMode)}>
      Change Theme
    </button>
  )
}

const ContextUseStatePage = () => {
  return (
    <ThemeProvider>
      <ThemeSwitcher />
      <ThemeDisplay />
    </ThemeProvider>
  );
}

export default ContextUseStatePage;
