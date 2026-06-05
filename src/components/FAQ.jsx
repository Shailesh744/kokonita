import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { faqs } from '../data'

export default function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section className="section" style={{ background: '#F1F5F9' }}>
      <style>{`[data-theme="dark"] .faq-section{background:#0a1628!important}`}</style>
      <div className="container faq-section" style={{ background: 'transparent' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="section-label">FAQ</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>Everything you need to know about working with RoboBird.</p>
        </div>
        <div style={{ maxWidth: 780, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
          {faqs.map((f, i) => (
            <div key={i} style={{
              background: 'var(--card-bg)', borderRadius: 12,
              border: '1px solid var(--card-border)',
              overflow: 'hidden'
            }}>
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                style={{
                  width: '100%', padding: '20px 24px', display: 'flex',
                  justifyContent: 'space-between', alignItems: 'center',
                  background: 'none', border: 'none', cursor: 'pointer',
                  textAlign: 'left', gap: 16
                }}
              >
                <span style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: 15, color: 'var(--secondary)' }}>{f.q}</span>
                <div style={{ flexShrink: 0, color: 'var(--primary)' }}>
                  {open === i ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p style={{ padding: '0 24px 20px', fontSize: 14, lineHeight: 1.8, color: '#64748B' }}>{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
