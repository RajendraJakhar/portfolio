import { motion } from 'framer-motion';
import { Award, ExternalLink, Shield, TrendingUp } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { certifications } from '../data/portfolio';

const colorMap: Record<string, { text: string; glow: string; border: string; bg: string }> = {
  cyan: { text: '#00f5ff', glow: 'rgba(0,245,255,0.15)', border: 'rgba(0,245,255,0.30)', bg: 'rgba(0,245,255,0.07)' },
  green: { text: '#00ff88', glow: 'rgba(0,255,136,0.15)', border: 'rgba(0,255,136,0.30)', bg: 'rgba(0,255,136,0.07)' },
  purple: { text: '#a78bfa', glow: 'rgba(167,139,250,0.15)', border: 'rgba(167,139,250,0.30)', bg: 'rgba(167,139,250,0.07)' },
  blue: { text: '#60a5fa', glow: 'rgba(96,165,250,0.15)', border: 'rgba(96,165,250,0.30)', bg: 'rgba(96,165,250,0.07)' },
};

export default function Certifications() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <div>
        <h2 className="text-2xl font-bold text-white mb-1">Certifications</h2>
        <p className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>Verified credentials &amp; achievements</p>
      </div>

      <ScrollReveal direction="up">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { icon: Award, label: 'Total Certs', value: certifications.length, color: '#00f5ff' },
            { icon: Shield, label: 'Verified', value: certifications.length, color: '#00ff88' },
            { icon: TrendingUp, label: 'In Progress', value: 2, color: '#f59e0b' },
          ].map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                whileHover={{ y: -2 }}
                className="flex items-center gap-4 p-4 rounded-2xl"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${stat.color}14`, border: `1px solid ${stat.color}28` }}>
                  <Icon size={18} style={{ color: stat.color }} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{stat.label}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {certifications.map((cert, i) => {
          const c = colorMap[cert.color];
          return (
            <ScrollReveal key={cert.id} delay={i * 0.03} direction="up">
              <motion.div
                whileHover={{ y: -3, scale: 1.01 }}
                className="p-5 rounded-2xl relative overflow-hidden group cursor-default"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: `1px solid ${c.border}`,
                  boxShadow: `0 0 5px ${c.glow}`,
                }}
              >
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" style={{ background: c.text, transform: 'translate(40%,-40%)' }} />
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3 flex-1">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: c.bg, border: `1px solid ${c.border}` }}>
                      <Award size={18} style={{ color: c.text, filter: `drop-shadow(0 0 6px ${c.text})` }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-semibold text-white mb-1 leading-tight">{cert.title}</h3>
                      <p className="text-xs mb-2" style={{ color: c.text }}>{cert.issuer}</p>
                      <div className="flex flex-wrap gap-2 items-center">
                        <span className="px-2 py-0.5 rounded-full text-xs" style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.4)' }}>{cert.date}</span>
                        {cert.credentialId && (
                          <span className="text-xs font-mono" style={{ color: 'rgba(255,255,255,0.25)' }}>ID: {cert.credentialId}</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: c.bg, border: `1px solid ${c.border}` }}
                  >
                    <ExternalLink size={13} style={{ color: c.text }} />
                  </motion.button>
                </div>
              </motion.div>
            </ScrollReveal>
          );
        })}
      </div>
    </motion.div>
  );
}
