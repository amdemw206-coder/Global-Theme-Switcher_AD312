import { createContext, useState } from 'react';

// 1. Create the Context object
export const ThemeContext = createContext();

// 2. Create the Provider component
export function ThemeProvider({ children }) {
  // State to track if the current theme is "light" or "dark"
  const [theme, setTheme] = useState('light');

  // Function to switch the state between light and dark
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // 3. Pass the theme and the toggle function down to the children
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}