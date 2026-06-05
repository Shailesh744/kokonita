import { motion } from 'framer-motion'
import { Zap } from 'lucide-react'

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: '#060f1e',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', gap: 24
      }}
    >
      <motion.div
        animate={{ scale: [1, 1.15, 1], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 1.2, repeat: Infinity }}
        style={{
          width: 72, height: 72, borderRadius: 20,
          background: 'linear-gradient(135deg, #2563EB, #06B6D4)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 0 40px rgba(37,99,235,0.5)'
        }}
      >
        <Zap size={36} color="white" fill="white" />
      </motion.div>
      <div>
        <p style={{ fontFamily: 'Poppins', color: 'white', fontSize: 22, fontWeight: 700, textAlign: 'center' }}>
          Robo<span style={{ color: '#06B6D4' }}>Bird</span>
        </p>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          style={{ height: 3, background: 'linear-gradient(90deg, #2563EB, #06B6D4)', borderRadius: 2, marginTop: 12 }}
        />
      </div>
    </motion.div>
  )
}
