import { motion } from 'framer-motion'
import { Lightbulb, Shield, Trophy, Star, Users, Zap } from 'lucide-react'
import CTASection from '../components/CTASection'
import { coreValues } from '../data'

const iconMap = { Lightbulb, Shield, Trophy, Star }

export default function About() {
  return (
    <>
      <section style={{ paddingTop: 140, paddingBottom: 80, background: 'linear-gradient(135deg, #060f1e 0%, #0d1f40 100%)', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
        <div style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translateX(-50%)', width: 600, height: 400, background: 'radial-gradient(ellipse, rgba(37,99,235,0.15) 0%, transparent 60%)', filter: 'blur(40px)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="section-label">About RoboBird</span>
            <h1 style={{ fontFamily: 'Poppins', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 900, color: 'white', marginBottom: 20, marginTop: 12 }}>
              Technology With a{' '}
              <span style={{ background: 'linear-gradient(135deg, #2563EB, #06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Human Touch</span>
            </h1>
            <p style={{ color: '#94A3B8', fontSize: 18, maxWidth: 600, margin: '0 auto' }}>We are a passionate team of technologists, designers, and strategists on a mission to make powerful IT accessible to every business.</p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }} className="story-grid">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="section-label">Our Story</span>
              <h2 className="section-title">Started With a Vision, Powered by Purpose</h2>
              <p style={{ color: '#64748B', fontSize: 16, lineHeight: 1.9, marginBottom: 20 }}>
                RoboBird was founded with a clear mission: to make enterprise-grade technology accessible to businesses of all sizes. We saw too many SMEs and startups struggling with outdated systems, overpriced software, and IT partners who didn't truly understand their business.
              </p>
              <p style={{ color: '#64748B', fontSize: 16, lineHeight: 1.9, marginBottom: 32 }}>
                Today, we are a full-stack digital agency serving clients across India — from Lucknow startups to national enterprises — delivering websites, ERP systems, mobile apps, and AI automation that drive measurable results.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                {[
                  { label: '2019', desc: 'Year Founded' },
                  { label: '100+', desc: 'Projects Delivered' },
                  { label: '50+', desc: 'Happy Clients' },
                  { label: '8+', desc: 'Service Categories' }
                ].map(s => (
                  <div key={s.label} style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: 12, padding: '20px 16px', textAlign: 'center' }}>
                    <div style={{ fontFamily: 'Poppins', fontWeight: 800, fontSize: 28, color: 'var(--primary)', marginBottom: 4 }}>{s.label}</div>
                    <div style={{ fontSize: 13, color: '#64748B' }}>{s.desc}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div style={{ background: 'linear-gradient(135deg, rgba(37,99,235,0.1), rgba(6,182,212,0.05))', border: '1px solid rgba(37,99,235,0.15)', borderRadius: 24, padding: 40 }}>
                <div style={{ fontSize: 48, marginBottom: 20, textAlign: 'center' }}>🚀</div>
                <h3 style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: 18, textAlign: 'center', marginBottom: 16 }}>Mission</h3>
                <p style={{ fontSize: 15, lineHeight: 1.8, color: '#64748B', textAlign: 'center', marginBottom: 32 }}>
                  To empower businesses through smart, affordable, and scalable digital solutions that create lasting value.
                </p>
                <div style={{ width: '100%', height: 1, background: 'var(--card-border)', marginBottom: 32 }} />
                <h3 style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: 18, textAlign: 'center', marginBottom: 16 }}>Vision</h3>
                <p style={{ fontSize: 15, lineHeight: 1.8, color: '#64748B', textAlign: 'center' }}>
                  To be the most trusted IT partner for SMEs and startups across India — making world-class technology universally accessible.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{ background: '#F1F5F9' }}>
        <style>{`[data-theme="dark"] .values-bg{background:#0a1628!important}`}</style>
        <div className="container values-bg" style={{ background: 'transparent' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="section-label">What We Stand For</span>
            <h2 className="section-title">Our Core Values</h2>
          </div>
          <div className="grid-4">
            {coreValues.map(({ icon, title, desc }, i) => {
              const Icon = iconMap[icon] || Star
              return (
                <motion.div key={title}
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: 16, padding: '32px 24px', textAlign: 'center' }}>
                  <div style={{ width: 56, height: 56, borderRadius: 16, background: 'rgba(37,99,235,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                    <Icon size={28} color="#2563EB" />
                  </div>
                  <h3 style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: 17, marginBottom: 12 }}>{title}</h3>
                  <p style={{ fontSize: 14, color: '#64748B', lineHeight: 1.7 }}>{desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="section-label">Leadership</span>
            <h2 className="section-title">Meet the Founder</h2>
          </div>
          <div style={{ maxWidth: 700, margin: '0 auto' }}>
            <motion.div
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: 24, overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}
            >
              <div style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E3A5F 100%)', padding: '48px 40px', display: 'flex', alignItems: 'center', gap: 32, flexWrap: 'wrap' }}>
                <div style={{ width: 120, height: 120, borderRadius: '50%', background: 'linear-gradient(135deg, #2563EB, #06B6D4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Poppins', fontWeight: 800, fontSize: 40, color: 'white', flexShrink: 0 }}>
                  SS
                </div>
                <div>
                  <h3 style={{ fontFamily: 'Poppins', fontWeight: 800, fontSize: 26, color: 'white', marginBottom: 6 }}>Shailesh Singh</h3>
                  <p style={{ color: '#06B6D4', fontWeight: 600, marginBottom: 12 }}>Founder & CEO, RoboBird IT Solution & Services</p>
                  <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                    {['Full-Stack Developer', 'UI/UX Designer', 'Tech Entrepreneur'].map(tag => (
                      <span key={tag} style={{ fontSize: 12, padding: '4px 12px', borderRadius: 100, background: 'rgba(37,99,235,0.25)', color: '#93C5FD', fontWeight: 500 }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div style={{ padding: '36px 40px' }}>
                <p style={{ fontSize: 15, lineHeight: 1.9, color: '#64748B', marginBottom: 20 }}>
                  Shailesh Singh is a passionate technologist and entrepreneur with over 5 years of experience in software development, UI/UX design, and digital transformation consulting. He founded RoboBird with the belief that every business deserves access to powerful technology.
                </p>
                <p style={{ fontSize: 15, lineHeight: 1.9, color: '#64748B' }}>
                  Under his leadership, RoboBird has grown from a solo consultancy to a full-service digital agency, delivering 100+ projects across web, mobile, ERP, and AI automation — helping businesses in Lucknow and beyond compete in the digital era.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection />
      <style>{`@media(max-width:768px){.story-grid{grid-template-columns:1fr!important}}`}</style>
    </>
  )
}
