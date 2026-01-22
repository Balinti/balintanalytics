import { memo } from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext'

/**
 * Theme Toggle component
 * Advanced React patterns: memo, custom hooks, context consumption
 */
const ThemeToggle = memo(function ThemeToggle() {
  const { theme, toggleTheme, isDark } = useTheme()

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
    </button>
  )
})

export default ThemeToggle
