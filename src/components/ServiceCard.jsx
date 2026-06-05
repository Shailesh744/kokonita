import { Globe, Smartphone, Database, Code, Palette, Video, Bot, Cloud } from 'lucide-react'
import { motion } from 'framer-motion'

const iconMap = { Globe, Smartphone, Database, Code, Palette, Video, Bot, Cloud }

export default function ServiceCard({ icon, title, short, color, delay = 0 }) {
  const Icon = iconMap[icon] || Globe
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -6 }}
      style={{
        background: 'var(--card-bg)',
        border: '1px solid var(--card-border)',
        borderRadius: 16, padding: '28px 24px',
        transition: 'box-shadow 0.3s',
        cursor: 'pointer'
      }}
      onMouseEnter={e => e.currentTarget.style.boxShadow = 'var(--shadow-lg)'}
      onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
    >
      <div style={{
        width: 52, height: 52, borderRadius: 14,
        background: `${color}18`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: 20
      }}>
        <Icon size={26} color={color} />
      </div>
      <h3 style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: 17, marginBottom: 10 }}>{title}</h3>
      <p style={{ fontSize: 14, color: '#64748B', lineHeight: 1.7 }}>{short}</p>
    </motion.div>
  )
}
