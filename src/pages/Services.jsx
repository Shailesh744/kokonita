import { motion } from 'framer-motion'
import { Globe, Smartphone, Database, Code, Palette, Video, Bot, Cloud, CheckCircle2 } from 'lucide-react'
import CTASection from '../components/CTASection'
import { services } from '../data'

const iconMap = { Globe, Smartphone, Database, Code, Palette, Video, Bot, Cloud }

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: 140, paddingBottom: 80, background: 'linear-gradient(135deg, #060f1e 0%, #0d1f40 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '20%', left: '10%', width: 400, height: 400, background: 'radial-gradient(circle, rgba(37,99,235,0.2) 0%, transparent 60%)', filter: 'blur(40px)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="section-label">What We Offer</span>
            <h1 style={{ fontFamily: 'Poppins', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 900, color: 'white', marginBottom: 20, marginTop: 12 }}>
              End-to-End{' '}
              <span style={{ background: 'linear-gradient(135deg, #2563EB, #06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>IT Services</span>
            </h1>
            <p style={{ color: '#94A3B8', fontSize: 18, maxWidth: 600, margin: '0 auto' }}>
              From concept to deployment — we handle every layer of your digital transformation journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Globe
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: i % 2 === 0 ? '1fr 1.2fr' : '1.2fr 1fr',
                  gap: 64, alignItems: 'center',
                  marginBottom: 96, paddingBottom: 96,
                  borderBottom: i < services.length - 1 ? '1px solid var(--card-border)' : 'none'
                }}
                className="service-row"
              >
                <div style={{ order: i % 2 === 0 ? 0 : 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
                    <div style={{ width: 56, height: 56, borderRadius: 16, background: `${service.color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon size={28} color={service.color} />
                    </div>
                    <span className="section-label" style={{ marginBottom: 0 }}>Service {String(i+1).padStart(2,'0')}</span>
                  </div>
                  <h2 style={{ fontFamily: 'Poppins', fontWeight: 800, fontSize: 'clamp(1.7rem, 3vw, 2.2rem)', marginBottom: 16 }}>{service.title}</h2>
                  <p style={{ fontSize: 16, color: '#64748B', lineHeight: 1.8, marginBottom: 32 }}>{service.description}</p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                    {service.features.map(f => (
                      <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <CheckCircle2 size={16} color={service.color} />
                        <span style={{ fontSize: 14, fontWeight: 500 }}>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ order: i % 2 === 0 ? 1 : 0 }}>
                  <div style={{
                    background: `linear-gradient(135deg, ${service.color}15 0%, ${service.color}05 100%)`,
                    border: `1px solid ${service.color}30`,
                    borderRadius: 24, padding: 40,
                    aspectRatio: '4/3', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    position: 'relative', overflow: 'hidden'
                  }}>
                    <div style={{ position: 'absolute', top: -40, right: -40, width: 200, height: 200, background: `${service.color}20`, borderRadius: '50%', filter: 'blur(40px)' }} />
                    <Icon size={100} color={service.color} style={{ opacity: 0.15 }} />
                    <div style={{ position: 'absolute', textAlign: 'center' }}>
                      <div style={{ width: 80, height: 80, borderRadius: 20, background: `${service.color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                        <Icon size={40} color={service.color} />
                      </div>
                      <div style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: 16, color: 'var(--secondary)' }}>{service.title}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      <CTASection />
      <style>{`@media(max-width:768px){.service-row{grid-template-columns:1fr!important} .service-row>div{order:unset!important}}`}</style>
    </>
  )
}
