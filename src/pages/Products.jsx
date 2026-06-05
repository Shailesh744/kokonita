import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import CTASection from '../components/CTASection'
import { products } from '../data'

export default function Products() {
  return (
    <>
      <section style={{ paddingTop: 140, paddingBottom: 80, background: 'linear-gradient(135deg, #060f1e 0%, #0d1f40 100%)', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
        <div style={{ position: 'absolute', top: '20%', right: '10%', width: 400, height: 400, background: 'radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 60%)', filter: 'blur(40px)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="section-label">Our Products</span>
            <h1 style={{ fontFamily: 'Poppins', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 900, color: 'white', marginBottom: 20, marginTop: 12 }}>
              Software Built for{' '}
              <span style={{ background: 'linear-gradient(135deg, #2563EB, #06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Real Business</span>
            </h1>
            <p style={{ color: '#94A3B8', fontSize: 18, maxWidth: 560, margin: '0 auto' }}>Ready-to-use products built on years of experience solving real business problems.</p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
            {products.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{
                  background: 'var(--card-bg)',
                  border: '1px solid var(--card-border)',
                  borderRadius: 24, overflow: 'hidden',
                  boxShadow: 'var(--shadow)'
                }}
              >
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }} className="product-grid">
                  {/* Info */}
                  <div style={{ padding: '48px 40px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                      {p.badge && (
                        <span style={{ background: 'linear-gradient(135deg, #2563EB, #06B6D4)', color: 'white', fontSize: 11, fontWeight: 700, padding: '4px 12px', borderRadius: 100 }}>
                          {p.badge}
                        </span>
                      )}
                      <span style={{ color: '#64748B', fontSize: 13 }}>Product {String(i+1).padStart(2,'0')}</span>
                    </div>
                    <h2 style={{ fontFamily: 'Poppins', fontWeight: 800, fontSize: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: 8 }}>{p.name}</h2>
                    <p style={{ color: p.color, fontWeight: 600, marginBottom: 16, fontSize: 15 }}>{p.tagline}</p>
                    <p style={{ color: '#64748B', fontSize: 15, lineHeight: 1.8, marginBottom: 28 }}>{p.description}</p>

                    <div style={{ marginBottom: 28 }}>
                      <h4 style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: 14, marginBottom: 14, color: 'var(--secondary)' }}>Key Benefits</h4>
                      {p.benefits.map(b => (
                        <div key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 8 }}>
                          <CheckCircle2 size={16} color={p.color} style={{ flexShrink: 0, marginTop: 2 }} />
                          <span style={{ fontSize: 14, lineHeight: 1.6 }}>{b}</span>
                        </div>
                      ))}
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
                      <div>
                        <span style={{ fontSize: 12, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: 1 }}>Starting from</span>
                        <div style={{ fontFamily: 'Poppins', fontWeight: 800, fontSize: 22, color: p.color }}>{p.pricing}</div>
                      </div>
                      <div style={{ display: 'flex', gap: 12 }}>
                        <Link to="/contact" className="btn btn-primary" style={{ padding: '11px 22px', fontSize: 14 }}>
                          Request Demo <ArrowRight size={15} />
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Modules */}
                  <div style={{ background: `linear-gradient(135deg, ${p.color}12, ${p.color}05)`, borderLeft: `1px solid ${p.color}25`, padding: '48px 40px' }}>
                    <h4 style={{ fontFamily: 'Poppins', fontWeight: 700, marginBottom: 24, fontSize: 15 }}>
                      <Sparkles size={16} color={p.color} style={{ display: 'inline', marginRight: 8 }} />
                      Included Modules
                    </h4>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                      {p.modules.map(m => (
                        <div key={m} style={{
                          background: 'var(--card-bg)', borderRadius: 10, padding: '14px 16px',
                          border: `1px solid ${p.color}20`, fontSize: 13, fontWeight: 500
                        }}>
                          {m}
                        </div>
                      ))}
                    </div>
                    <div style={{ marginTop: 32, background: `${p.color}15`, borderRadius: 12, padding: '20px', border: `1px solid ${p.color}25` }}>
                      <p style={{ fontSize: 13, color: '#64748B', lineHeight: 1.7, marginBottom: 12 }}>All plans include onboarding support, training, and 3 months of free updates.</p>
                      <Link to="/contact" style={{ color: p.color, fontSize: 13, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6 }}>
                        Talk to Sales <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <style>{`@media(max-width:768px){.product-grid{grid-template-columns:1fr!important}}`}</style>
    </>
  )
}
