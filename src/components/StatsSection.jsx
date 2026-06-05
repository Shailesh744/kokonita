import { useCounter } from '../hooks/useCounter'
import { motion } from 'framer-motion'
import { stats } from '../data'

function StatCard({ value, suffix, label, delay }) {
  const [count, ref] = useCounter(value)
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      style={{
        textAlign: 'center', padding: '32px 24px',
        background: 'rgba(255,255,255,0.07)',
        borderRadius: 16, border: '1px solid rgba(255,255,255,0.1)'
      }}
    >
      <div style={{ fontFamily: 'Poppins', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, color: 'white', lineHeight: 1 }}>
        {count}{suffix}
      </div>
      <div style={{ color: '#94A3B8', marginTop: 8, fontSize: 15 }}>{label}</div>
    </motion.div>
  )
}

export default function StatsSection() {
  return (
    <section style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E3A5F 100%)', padding: '80px 0' }}>
      <div className="container">
        <div className="grid-4">
          {stats.map((s, i) => <StatCard key={s.label} {...s} delay={i * 0.1} />)}
        </div>
      </div>
    </section>
  )
}
