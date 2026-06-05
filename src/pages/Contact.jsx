import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react'

const serviceOptions = ['Website Development', 'Mobile App Development', 'ERP Solutions', 'Software Development', 'Graphic Design', 'Video Editing', 'AI Automation', 'Software Rental (SaaS)', 'Other']

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', service: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required'
    if (!form.phone.trim()) e.phone = 'Phone is required'
    if (!form.service) e.service = 'Please select a service'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setSubmitted(true)
  }

  const field = (label, key, type = 'text', options) => (
    <div key={key}>
      <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 8, color: 'var(--secondary)' }}>{label}</label>
      {options ? (
        <select
          value={form[key]} onChange={e => { setForm(f => ({ ...f, [key]: e.target.value })); setErrors(er => ({ ...er, [key]: '' })) }}
          style={{ width: '100%', padding: '12px 16px', borderRadius: 10, border: `1.5px solid ${errors[key] ? '#EF4444' : 'var(--card-border)'}`, background: 'var(--card-bg)', color: form[key] ? 'var(--text)' : '#94A3B8', fontSize: 14, outline: 'none', cursor: 'pointer' }}
        >
          <option value="">Select a service</option>
          {options.map(o => <option key={o} value={o}>{o}</option>)}
        </select>
      ) : type === 'textarea' ? (
        <textarea
          value={form[key]} onChange={e => { setForm(f => ({ ...f, [key]: e.target.value })); setErrors(er => ({ ...er, [key]: '' })) }}
          rows={5} placeholder={`Your ${label.toLowerCase()}...`}
          style={{ width: '100%', padding: '12px 16px', borderRadius: 10, border: `1.5px solid ${errors[key] ? '#EF4444' : 'var(--card-border)'}`, background: 'var(--card-bg)', color: 'var(--text)', fontSize: 14, outline: 'none', resize: 'vertical', fontFamily: 'Inter' }}
        />
      ) : (
        <input
          type={type} value={form[key]} onChange={e => { setForm(f => ({ ...f, [key]: e.target.value })); setErrors(er => ({ ...er, [key]: '' })) }}
          placeholder={`Your ${label.toLowerCase()}`}
          style={{ width: '100%', padding: '12px 16px', borderRadius: 10, border: `1.5px solid ${errors[key] ? '#EF4444' : 'var(--card-border)'}`, background: 'var(--card-bg)', color: 'var(--text)', fontSize: 14, outline: 'none' }}
        />
      )}
      {errors[key] && <p style={{ color: '#EF4444', fontSize: 12, marginTop: 6 }}>{errors[key]}</p>}
    </div>
  )

  return (
    <>
      <section style={{ paddingTop: 140, paddingBottom: 80, background: 'linear-gradient(135deg, #060f1e 0%, #0d1f40 100%)', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
        <div style={{ position: 'absolute', top: '20%', left: '20%', width: 400, height: 300, background: 'radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 60%)', filter: 'blur(40px)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="section-label">Get In Touch</span>
            <h1 style={{ fontFamily: 'Poppins', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 900, color: 'white', marginBottom: 20, marginTop: 12 }}>
              Let's{' '}
              <span style={{ background: 'linear-gradient(135deg, #2563EB, #06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Build Together</span>
            </h1>
            <p style={{ color: '#94A3B8', fontSize: 18, maxWidth: 520, margin: '0 auto' }}>Tell us about your project. We'll respond within 24 hours with a plan and free consultation.</p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 64, alignItems: 'start' }} className="contact-grid">
            {/* Info */}
            <div>
              {[
                { Icon: Phone, title: 'Phone', val: '+91 98765 43210', sub: 'Mon–Sat, 9am–7pm IST' },
                { Icon: Mail, title: 'Email', val: 'hello@robobird.in', sub: 'We respond within 24 hours' },
                { Icon: MapPin, title: 'Location', val: 'Lucknow, UP, India', sub: 'Available for in-person meetings' }
              ].map(({ Icon, title, val, sub }, i) => (
                <motion.div key={title}
                  initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  style={{ display: 'flex', gap: 16, padding: '24px', background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: 14, marginBottom: 16 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(37,99,235,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={22} color="#2563EB" />
                  </div>
                  <div>
                    <div style={{ fontSize: 12, color: '#94A3B8', marginBottom: 4, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.5 }}>{title}</div>
                    <div style={{ fontFamily: 'Poppins', fontWeight: 600, color: 'var(--secondary)', marginBottom: 4 }}>{val}</div>
                    <div style={{ fontSize: 12, color: '#64748B' }}>{sub}</div>
                  </div>
                </motion.div>
              ))}

              {/* Map placeholder */}
              <div style={{ borderRadius: 14, overflow: 'hidden', border: '1px solid var(--card-border)', height: 200, background: 'linear-gradient(135deg, rgba(37,99,235,0.08), rgba(6,182,212,0.05))', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12, marginTop: 8 }}>
                <MapPin size={32} color="#2563EB" />
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: 14 }}>Lucknow, Uttar Pradesh</div>
                  <div style={{ fontSize: 12, color: '#64748B' }}>India — 226 001</div>
                </div>
              </div>
            </div>

            {/* Form */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              {submitted ? (
                <div style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: 20, padding: 56, textAlign: 'center' }}>
                  <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'rgba(16,185,129,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                    <CheckCircle2 size={40} color="#10B981" />
                  </div>
                  <h3 style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: 22, marginBottom: 12 }}>Message Sent!</h3>
                  <p style={{ color: '#64748B', lineHeight: 1.7 }}>Thanks for reaching out. We'll review your requirements and get back to you within 24 hours with a tailored plan.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: 20, padding: '40px 36px', display: 'flex', flexDirection: 'column', gap: 20 }}>
                  <h3 style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: 20, marginBottom: 4 }}>Send Us a Message</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                    {field('Full Name', 'name')}
                    {field('Email Address', 'email', 'email')}
                    {field('Phone Number', 'phone', 'tel')}
                    {field('Company Name', 'company')}
                  </div>
                  {field('Service Required', 'service', 'select', serviceOptions)}
                  {field('Your Message', 'message', 'textarea')}
                  <button type="submit" className="btn btn-primary" style={{ justifyContent: 'center', fontSize: 15, padding: '15px 32px', marginTop: 4 }}>
                    <Send size={18} /> Send Message
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <style>{`@media(max-width:768px){.contact-grid{grid-template-columns:1fr!important}}`}</style>
    </>
  )
}
