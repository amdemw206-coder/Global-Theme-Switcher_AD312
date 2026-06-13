import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export default function ThemeSwitcher() {
  // Grab the current theme and the toggle function from our Context
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
      {theme === 'light' ? ' Switch to Dark' : ' Switch to Light'}
    </button>
  );
}