import { Moon, Sun } from 'lucide-react'

export default function DarkModeToggle({ isDark, toggle }) {
  return (
    <button onClick={toggle} style={{
      background: 'var(--card-bg)',
      border: '1px solid var(--card-border)',
      borderRadius: 50,
      width: 44, height: 44,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      cursor: 'pointer',
      color: 'var(--text)',
      transition: 'all 0.2s',
      boxShadow: 'var(--shadow)'
    }}>
      {isDark ? <Sun size={18} color="#F59E0B" /> : <Moon size={18} color="#2563EB" />}
    </button>
  )
}
