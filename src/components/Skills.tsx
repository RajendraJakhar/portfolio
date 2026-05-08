import { motion } from 'framer-motion';
import { Code2, Brain, BarChart3, Network, Globe, Database, Zap, Server, Table, Eye, MessageSquare, GitBranch } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { skills } from '../data/portfolio';

const iconMap: Record<string, React.ElementType> = {
  Code2, Brain, BarChart3, Network, Globe, Database, Zap, Server, Table, Eye, MessageSquare, GitBranch,
};

const colorMap: Record<string, { text: string; glow: string; border: string; bg: string }> = {
  cyan: { text: '#00f5ff', glow: 'rgba(0,245,255,0.2)', border: 'rgba(0,245,255,0.25)', bg: 'rgba(0,245,255,0.06)' },
  green: { text: '#00ff88', glow: 'rgba(0,255,136,0.2)', border: 'rgba(0,255,136,0.25)', bg: 'rgba(0,255,136,0.06)' },
  purple: { text: '#a78bfa', glow: 'rgba(167,139,250,0.2)', border: 'rgba(167,139,250,0.25)', bg: 'rgba(167,139,250,0.06)' },
  blue: { text: '#60a5fa', glow: 'rgba(96,165,250,0.2)', border: 'rgba(96,165,250,0.25)', bg: 'rgba(96,165,250,0.06)' },
};

const categories = ['All', 'AI/ML', 'Data Science', 'Language', 'Web Dev', 'Backend', 'Database', 'DevOps'];

export default function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <div>
        <h2 className="text-2xl font-bold text-white mb-1">Skills</h2>
        <p className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>Technical proficiency matrix</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <span
            key={cat}
            className="px-3 py-1 rounded-full text-xs font-medium cursor-default"
            style={{ background: cat === 'All' ? 'rgba(0,245,255,0.12)' : 'rgba(255,255,255,0.04)', border: cat === 'All' ? '1px solid rgba(0,245,255,0.3)' : '1px solid rgba(255,255,255,0.08)', color: cat === 'All' ? '#00f5ff' : 'rgba(255,255,255,0.45)' }}
          >
            {cat}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill, i) => {
          const Icon = iconMap[skill.icon] ?? Code2;
          const c = colorMap[skill.color];
          return (
            <ScrollReveal key={skill.name} delay={i * 0.03} direction="up">
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                className="p-5 rounded-2xl relative overflow-hidden group cursor-default"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: `1px solid ${c.border}`,
                  backdropFilter: 'blur(20px)',
                  boxShadow: `0 0 5px ${c.glow}`,
                }}
              >
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" style={{ background: c.text, transform: 'translate(30%,-30%)' }} />

                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: c.bg, border: `1px solid ${c.border}` }}>
                    <Icon size={18} style={{ color: c.text, filter: `drop-shadow(0 0 6px ${c.text})` }} />
                  </div>
                  <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: c.bg, color: c.text }}>{skill.category}</span>
                </div>

                <h3 className="text-sm font-semibold text-white mb-3">{skill.name}</h3>

                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span style={{ color: 'rgba(255,255,255,0.35)' }}>Proficiency</span>
                  <span style={{ color: c.text, fontWeight: 600 }}>{skill.level}%</span>
                </div>
                <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.07)' }}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="h-full rounded-full"
                    style={{ background: `linear-gradient(90deg,${c.text},${c.text}88)`, boxShadow: `0 0 8px ${c.text}` }}
                  />
                </div>
              </motion.div>
            </ScrollReveal>
          );
        })}
      </div>
    </motion.div>
  );
}
