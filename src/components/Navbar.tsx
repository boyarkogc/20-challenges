import { Link } from "react-router-dom"
import ThemeToggle from "./ThemeToggle"

export default function Navbar() {
  return (
    <nav className="bg-light-secondary dark:bg-dark-secondary p-4 shadow-md">
      <ul className="flex items-center space-x-3 justify-end">
        <li><ThemeToggle /></li>
        <li><Link to="/" className="text-dark-primary dark:text-light-primary">Home</Link></li>
        <li><Link to="/about" className="text-dark-primary dark:text-light-primary">About</Link></li>
      </ul>
    </nav>
  )
}