import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import CTASection from '../components/CTASection'
import { portfolio } from '../data'

const categories = ['All', 'Websites', 'Mobile Apps', 'ERP Systems', 'Branding', 'Software Projects']

export default function Portfolio() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? portfolio : portfolio.filter(p => p.category === active)

  return (
    <>
      <section style={{ paddingTop: 140, paddingBottom: 80, background: 'linear-gradient(135deg, #060f1e 0%, #0d1f40 100%)', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
        <div style={{ position: 'absolute', bottom: '20%', left: '10%', width: 350, height: 350, background: 'radial-gradient(circle, rgba(37,99,235,0.2) 0%, transparent 60%)', filter: 'blur(40px)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="section-label">Our Work</span>
            <h1 style={{ fontFamily: 'Poppins', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 900, color: 'white', marginBottom: 20, marginTop: 12 }}>
              Projects That{' '}
              <span style={{ background: 'linear-gradient(135deg, #2563EB, #06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Speak for Themselves</span>
            </h1>
            <p style={{ color: '#94A3B8', fontSize: 18, maxWidth: 560, margin: '0 auto' }}>100+ projects delivered across industries, technologies, and business models.</p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Filter */}
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 56 }}>
            {categories.map(cat => (
              <button key={cat} onClick={() => setActive(cat)} style={{
                padding: '10px 22px', borderRadius: 100, border: 'none', cursor: 'pointer',
                fontFamily: 'Poppins', fontWeight: 600, fontSize: 14, transition: 'all 0.2s',
                background: active === cat ? 'var(--gradient)' : 'var(--card-bg)',
                color: active === cat ? 'white' : 'var(--text)',
                boxShadow: active === cat ? '0 4px 16px rgba(37,99,235,0.3)' : 'var(--shadow)'
              }}>
                {cat}
              </button>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="portfolio-grid">
            <AnimatePresence mode="popLayout">
              {filtered.map(p => (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -6 }}
                  style={{
                    background: 'var(--card-bg)',
                    border: '1px solid var(--card-border)',
                    borderRadius: 16, overflow: 'hidden',
                    cursor: 'pointer', transition: 'box-shadow 0.3s'
                  }}
                  onMouseEnter={e => e.currentTarget.style.boxShadow = 'var(--shadow-lg)'}
                  onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
                >
                  {/* Image placeholder */}
                  <div style={{
                    height: 200,
                    background: `linear-gradient(135deg, ${p.color}25, ${p.color}10)`,
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'center',
                    position: 'relative', overflow: 'hidden'
                  }}>
                    <div style={{ position: 'absolute', top: -30, right: -30, width: 120, height: 120, background: `${p.color}20`, borderRadius: '50%' }} />
                    <div style={{ fontSize: 48, marginBottom: 8 }}>
                      {{ 'Websites': '🌐', 'Mobile Apps': '📱', 'ERP Systems': '🗄️', 'Branding': '🎨', 'Software Projects': '💻' }[p.category]}
                    </div>
                    <span style={{ fontSize: 12, color: p.color, fontWeight: 600, background: `${p.color}20`, padding: '4px 12px', borderRadius: 100 }}>{p.category}</span>
                  </div>
                  <div style={{ padding: '24px 20px' }}>
                    <h3 style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: 16, marginBottom: 8 }}>{p.title}</h3>
                    <p style={{ fontSize: 13, color: '#64748B', lineHeight: 1.7, marginBottom: 16 }}>{p.desc}</p>
                    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                      {p.tech.map(t => (
                        <span key={t} style={{ fontSize: 11, fontWeight: 600, padding: '3px 10px', borderRadius: 100, background: 'rgba(37,99,235,0.08)', color: 'var(--primary)' }}>{t}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <CTASection />
      <style>{`@media(max-width:768px){.portfolio-grid{grid-template-columns:1fr!important}} @media(max-width:1024px){.portfolio-grid{grid-template-columns:repeat(2,1fr)!important}}`}</style>
    </>
  )
}
