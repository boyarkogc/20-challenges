import { createContext, useState, useEffect, ReactNode } from "react";

const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {}
})

interface ThemeProviderProps {
  children: ReactNode
}

function ThemeProvider({children}: ThemeProviderProps) {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    if (savedTheme) return savedTheme
    if (userPrefersDark) return 'dark'
    return 'light'
  })

  useEffect(() => {
    const root = document.getElementById('root')!;
    if (theme === 'light') {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }else {
      root.classList.add('dark')
      localStorage.setItem('theme','dark')
    }
  }, [theme])

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeProvider }