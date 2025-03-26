import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div id="appContainer" className="bg-light-primary dark:bg-dark-primary h-screen flex flex-col justify-between">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <footer className="text-center bg-light-secondary dark:bg-dark-secondary">Footer placeholder</footer>
    </div>
  )
}