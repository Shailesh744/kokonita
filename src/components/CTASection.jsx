import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function CTASection() {
  return (
    <section style={{ padding: '96px 0', background: 'linear-gradient(135deg, #0F172A 0%, #1E3A5F 100%)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '-50%', left: '-10%', width: '60%', height: '200%', background: 'radial-gradient(ellipse, rgba(37,99,235,0.2) 0%, transparent 60%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-50%', right: '-10%', width: '50%', height: '200%', background: 'radial-gradient(ellipse, rgba(6,182,212,0.15) 0%, transparent 60%)', pointerEvents: 'none' }} />
      <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(37,99,235,0.2)', border: '1px solid rgba(37,99,235,0.3)', borderRadius: 100, padding: '8px 20px', marginBottom: 24 }}>
            <Sparkles size={16} color="#60A5FA" />
            <span style={{ color: '#60A5FA', fontSize: 13, fontWeight: 600 }}>Free Consultation Available</span>
          </div>
          <h2 style={{ fontFamily: 'Poppins', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, color: 'white', marginBottom: 20 }}>
            Ready to Grow Your Business?
          </h2>
          <p style={{ color: '#94A3B8', fontSize: 18, maxWidth: 560, margin: '0 auto 40px' }}>
            Let's talk about your goals. Get a free consultation and see how RoboBird can transform your business.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary" style={{ fontSize: 16, padding: '16px 32px' }}>
              Request Free Consultation <ArrowRight size={18} />
            </Link>
            <Link to="/portfolio" className="btn btn-outline" style={{ fontSize: 16, padding: '16px 32px' }}>
              View Our Work
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
