import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Zap, Users, Clock, Rocket, HeadphonesIcon, Cpu, TrendingUp, Award } from 'lucide-react'
import ServiceCard from '../components/ServiceCard'
import StatsSection from '../components/StatsSection'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import CTASection from '../components/CTASection'
import { services } from '../data'

const whyUs = [
  { icon: TrendingUp, title: 'Affordable Pricing', desc: 'Flexible plans for every budget — no hidden costs, no surprises.' },
  { icon: Award, title: 'Expert Team', desc: '5+ years of collective expertise across domains and technologies.' },
  { icon: Zap, title: 'Fast Delivery', desc: 'Agile delivery with milestone-based progress and on-time launches.' },
  { icon: Rocket, title: 'Scalable Solutions', desc: 'Built to grow with you — from MVP to enterprise scale seamlessly.' },
  { icon: HeadphonesIcon, title: 'Premium Support', desc: '24/7 dedicated support team — we\'re always just a call away.' },
  { icon: Cpu, title: 'Latest Technologies', desc: 'We use cutting-edge stacks to future-proof every solution we build.' },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section style={{ minHeight: '100vh', position: 'relative', display: 'flex', alignItems: 'center', overflow: 'hidden', paddingTop: 72 }}>
        {/* Animated BG */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #060f1e 0%, #0d1f40 50%, #0a1628 100%)' }} />
        <div style={{ position: 'absolute', top: '10%', left: '5%', width: 600, height: 600, background: 'radial-gradient(circle, rgba(37,99,235,0.25) 0%, transparent 60%)', filter: 'blur(40px)', animation: 'pulse1 4s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', bottom: '10%', right: '5%', width: 500, height: 500, background: 'radial-gradient(circle, rgba(6,182,212,0.2) 0%, transparent 60%)', filter: 'blur(40px)', animation: 'pulse2 5s ease-in-out infinite' }} />
        
        {/* Grid overlay */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(37,99,235,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.05) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(37,99,235,0.15)', border: '1px solid rgba(37,99,235,0.3)', borderRadius: 100, padding: '8px 20px', marginBottom: 28 }}
              >
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#10B981', animation: 'blink 1.5s infinite' }} />
                <span style={{ color: '#93C5FD', fontSize: 13, fontWeight: 600 }}>Available for New Projects</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                style={{ fontFamily: 'Poppins', fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', fontWeight: 900, color: 'white', lineHeight: 1.1, marginBottom: 24 }}
              >
                Transform Your Business With{' '}
                <span style={{ background: 'linear-gradient(135deg, #2563EB, #06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Smart Digital Solutions
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                style={{ color: '#94A3B8', fontSize: 18, lineHeight: 1.8, marginBottom: 36 }}
              >
                Web Development, Mobile Apps, ERP Systems, AI Automation, Design & Digital Growth Solutions — all under one roof.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
                style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 48 }}
              >
                <Link to="/contact" className="btn btn-primary" style={{ fontSize: 16, padding: '16px 32px' }}>
                  Get Free Consultation <ArrowRight size={18} />
                </Link>
                <Link to="/services" className="btn btn-outline" style={{ fontSize: 16, padding: '16px 32px' }}>
                  View Services
                </Link>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                {['100+ Projects', '50+ Clients', '5+ Years Experience'].map(t => (
                  <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#94A3B8', fontSize: 14 }}>
                    <CheckCircle2 size={16} color="#10B981" />
                    {t}
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right — floating cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
              style={{ position: 'relative', height: 480 }}
              className="hero-right"
            >
              {[
                { icon: '🌐', label: 'Website Launched', sub: 'AgroMart E-Commerce', top: '5%', left: '10%' },
                { icon: '📱', label: 'App Published', sub: 'MediConnect iOS & Android', top: '35%', right: '0%' },
                { icon: '🤖', label: 'AI Bot Active', sub: '1,240 leads captured', bottom: '5%', left: '20%' },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.8 }}
                  style={{
                    position: 'absolute', ...card,
                    background: 'rgba(255,255,255,0.08)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    borderRadius: 16, padding: '16px 20px',
                    minWidth: 220
                  }}
                >
                  <div style={{ fontSize: 24, marginBottom: 8 }}>{card.icon}</div>
                  <div style={{ color: 'white', fontFamily: 'Poppins', fontWeight: 600, fontSize: 15 }}>{card.label}</div>
                  <div style={{ color: '#94A3B8', fontSize: 12, marginTop: 4 }}>{card.sub}</div>
                </motion.div>
              ))}
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 200, height: 200, background: 'radial-gradient(circle, rgba(37,99,235,0.3) 0%, transparent 70%)', filter: 'blur(30px)' }} />
            </motion.div>
          </div>
        </div>

        <style>{`
          @keyframes pulse1 { 0%,100%{transform:scale(1) translate(0,0)} 50%{transform:scale(1.1) translate(20px,-20px)} }
          @keyframes pulse2 { 0%,100%{transform:scale(1) translate(0,0)} 50%{transform:scale(1.15) translate(-20px,20px)} }
          @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.3} }
          @media(max-width:768px){ .hero-right{display:none!important} }
        `}</style>
      </section>

      <StatsSection />

      {/* Why Choose Us */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="section-label">Why RoboBird</span>
            <h2 className="section-title">Built Different. Delivered Better.</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>We combine technical excellence with business understanding to deliver solutions that actually move the needle.</p>
          </div>
          <div className="grid-3">
            {whyUs.map(({ icon: Icon, title, desc }, i) => (
              <motion.div key={title}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                style={{ display: 'flex', gap: 16, padding: '24px', background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: 14 }}>
                <div style={{ flexShrink: 0, width: 44, height: 44, borderRadius: 12, background: 'rgba(37,99,235,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon size={22} color="#2563EB" />
                </div>
                <div>
                  <h3 style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: 16, marginBottom: 6 }}>{title}</h3>
                  <p style={{ fontSize: 14, color: '#64748B', lineHeight: 1.6 }}>{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="section" style={{ background: '#F1F5F9' }}>
        <style>{`[data-theme="dark"] .services-section{background:#0a1628!important}`}</style>
        <div className="container services-section" style={{ background: 'transparent' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, flexWrap: 'wrap', gap: 16 }}>
            <div>
              <span className="section-label">What We Do</span>
              <h2 className="section-title" style={{ marginBottom: 0 }}>Our Services</h2>
            </div>
            <Link to="/services" className="btn btn-secondary">View All Services <ArrowRight size={16} /></Link>
          </div>
          <div className="grid-4">
            {services.slice(0,8).map((s, i) => <ServiceCard key={s.id} {...s} delay={i * 0.07} />)}
          </div>
        </div>
      </section>

      <Testimonials />
      <FAQ />
      <CTASection />
    </>
  )
}
