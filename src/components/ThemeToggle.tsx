import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";
import moon from "../assets/moon.png"
import sun from "../assets/sun.png"

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md focus:outline-none transition-colors"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? (
        // Sun icon for dark mode (clicking switches to light)
        <img src={sun} width={30} className="cursor-pointer"/>
      ) : (
        // Moon icon for light mode (clicking switches to dark)
        <img src={moon} width={30} className="cursor-pointer"/>
      )}
    </button>
  )
}