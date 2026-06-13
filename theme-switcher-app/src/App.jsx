import { useContext } from 'react';
import { ThemeProvider, ThemeContext } from './ThemeContext';
import ThemeSwitcher from './ThemeSwitcher';
import './App.css'; 

function MainAppContent() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme === 'light' ? 'light-mode' : 'dark-mode'}>
      <h1>Global Theme Switcher</h1>
      <p>The current theme is: <strong>{theme}</strong></p>      
      <ThemeSwitcher />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <MainAppContent />
    </ThemeProvider>
  );
}