import { Link } from 'react-router-dom'
import { Zap, Mail, Phone, MapPin, Twitter, Linkedin, Instagram, Facebook, ArrowRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{ background: '#060f1e', color: '#94A3B8', paddingTop: 80 }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: 48, paddingBottom: 64, borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
          {/* Brand */}
          <div>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: 'linear-gradient(135deg, #2563EB, #06B6D4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Zap size={20} color="white" fill="white" />
              </div>
              <span style={{ fontFamily: 'Poppins', fontWeight: 800, fontSize: 18, color: 'white' }}>Robo<span style={{ color: '#06B6D4' }}>Bird</span></span>
            </Link>
            <p style={{ fontSize: 14, lineHeight: 1.8, marginBottom: 24, maxWidth: 280 }}>Empowering businesses through smart digital solutions. From startups to enterprises, we build technology that drives growth.</p>
            <div style={{ display: 'flex', gap: 12 }}>
              {[Twitter, Linkedin, Instagram, Facebook].map((Icon, i) => (
                <a key={i} href="#" style={{ width: 38, height: 38, borderRadius: 8, background: 'rgba(255,255,255,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94A3B8', transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(37,99,235,0.3)'; e.currentTarget.style.color = '#60A5FA' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.color = '#94A3B8' }}>
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ color: 'white', fontFamily: 'Poppins', fontWeight: 600, marginBottom: 20, fontSize: 15 }}>Services</h4>
            {['Website Development', 'Mobile Apps', 'ERP Solutions', 'Software Development', 'Graphic Design', 'AI Automation'].map(s => (
              <Link key={s} to="/services" style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#94A3B8', fontSize: 14, marginBottom: 10, transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#06B6D4'}
                onMouseLeave={e => e.currentTarget.style.color = '#94A3B8'}>
                <ArrowRight size={12} /> {s}
              </Link>
            ))}
          </div>

          {/* Company */}
          <div>
            <h4 style={{ color: 'white', fontFamily: 'Poppins', fontWeight: 600, marginBottom: 20, fontSize: 15 }}>Company</h4>
            {[['About Us', '/about'], ['Portfolio', '/portfolio'], ['Products', '/products'], ['Contact', '/contact']].map(([label, to]) => (
              <Link key={to} to={to} style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#94A3B8', fontSize: 14, marginBottom: 10, transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#06B6D4'}
                onMouseLeave={e => e.currentTarget.style.color = '#94A3B8'}>
                <ArrowRight size={12} /> {label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: 'white', fontFamily: 'Poppins', fontWeight: 600, marginBottom: 20, fontSize: 15 }}>Contact</h4>
            {[
              { Icon: Phone, text: '+91 98765 43210' },
              { Icon: Mail, text: 'hello@robobird.in' },
              { Icon: MapPin, text: 'Lucknow, Uttar Pradesh, India' }
            ].map(({ Icon, text }) => (
              <div key={text} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 14 }}>
                <Icon size={16} color="#06B6D4" style={{ marginTop: 2, flexShrink: 0 }} />
                <span style={{ fontSize: 14, lineHeight: 1.5 }}>{text}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 0', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: 13 }}>© {new Date().getFullYear()} RoboBird IT Solution & Services. All rights reserved.</p>
          <p style={{ fontSize: 13 }}>Made with ❤️ by <span style={{ color: '#06B6D4' }}>RoboBird Team</span></p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer .container > div:first-child { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 1024px) {
          footer .container > div:first-child { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </footer>
  )
}
