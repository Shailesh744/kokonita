import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { testimonials } from '../data'

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const prev = () => setCurrent(c => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent(c => (c + 1) % testimonials.length)
  const visible = [current, (current+1)%testimonials.length, (current+2)%testimonials.length]

  return (
    <section className="section" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>Real results, real relationships. Hear from businesses we've helped grow.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24, marginBottom: 40 }}>
          {visible.map((idx, i) => {
            const t = testimonials[idx]
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                style={{
                  background: 'var(--card-bg)',
                  border: '1px solid var(--card-border)',
                  borderRadius: 16, padding: '28px 24px'
                }}
              >
                <div style={{ display: 'flex', marginBottom: 16 }}>
                  {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} color="#F59E0B" fill="#F59E0B" />)}
                </div>
                <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--text)', marginBottom: 20, fontStyle: 'italic' }}>"{t.text}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: '50%',
                    background: 'var(--gradient)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'white', fontFamily: 'Poppins', fontWeight: 700, fontSize: 14
                  }}>{t.initials}</div>
                  <div>
                    <div style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: 14, color: 'var(--secondary)' }}>{t.name}</div>
                    <div style={{ fontSize: 12, color: '#64748B' }}>{t.role}</div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 12 }}>
          <button onClick={prev} style={{ width: 44, height: 44, borderRadius: '50%', border: '2px solid var(--card-border)', background: 'var(--card-bg)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text)' }}>
            <ChevronLeft size={20} />
          </button>
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} style={{ width: i === current ? 24 : 8, height: 8, borderRadius: 4, border: 'none', background: i === current ? 'var(--primary)' : 'var(--card-border)', cursor: 'pointer', transition: 'all 0.3s', padding: 0 }} />
          ))}
          <button onClick={next} style={{ width: 44, height: 44, borderRadius: '50%', border: '2px solid var(--card-border)', background: 'var(--card-bg)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text)' }}>
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
      <style>{`@media(max-width:768px){.testimonial-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  )
}
