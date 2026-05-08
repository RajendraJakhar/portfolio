import { motion } from 'framer-motion';
import { Terminal, Sparkles, ArrowRight, Activity, Wifi, Download } from 'lucide-react';
import MetricCard from './MetricCard';
import ScrollReveal from './ScrollReveal';
import { metrics } from '../data/portfolio';
import type { SectionId } from '../types';

const terminalLines = [
  { prefix: '~', text: 'rajendra.specialization = "AI & Data Science"', color: '#00ff88' },
  { prefix: '~', text: 'rajendra.institute = "IIT Jodhpur"', color: '#a78bfa' },
  { prefix: '~', text: 'rajendra.status = "Open to Internships"', color: '#f59e0b' },
  { prefix: '$', text: 'console.log("Building the future with AI") ✓', color: '#00f5ff' },
];

interface DashboardProps {
  onNavigate: (id: SectionId) => void;
}

export default function Dashboard({ onNavigate }: DashboardProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="space-y-8"
    >
      <div className="relative rounded-3xl overflow-hidden p-8" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.17)', backdropFilter: 'blur(20px)' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ background: 'radial-gradient(circle,#7c3aed,transparent)' }} />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full opacity-8 blur-3xl" style={{ background: 'radial-gradient(circle,#00f5ff,transparent)' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full opacity-5 blur-3xl" style={{ background: 'radial-gradient(circle,#00ff88,transparent)' }} />
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center gap-8">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-base font-medium" style={{ background: 'rgba(0,255,136,0.1)', border: '1px solid rgba(0,255,136,0.25)', color: '#00ff88' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Available for Internships
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-base font-medium" style={{ background: 'rgba(0,245,255,0.1)', border: '1px solid rgba(0,245,255,0.2)', color: '#00f5ff' }}>
                <Activity size={10} />
                IIT Jodhpur
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-2 leading-tight">
              Rajendra Kumar
            </h1>
            <p className="text-lg font-medium mb-3" style={{ color: '#00f5ff' }}>
              BS in AI &amp; Data Science Student
            </p>
            <p className="text-sm leading-relaxed max-w-xl" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Learning and building projects in Python, Machine Learning and Web Development. Focused on practical skills, real-world projects and Summer 2026 internship opportunities.
            </p>

            <div className="flex flex-wrap items-center gap-3 mt-6">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavigate('projects')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-black transition-all"
                style={{ background: 'linear-gradient(135deg,#00f5ff,#00a8cc)', boxShadow: '0 10px 25px rgba(0,245,255,0.2)' }}
              >
                <Sparkles size={15} />
                View Projects
              </motion.button>

              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-black transition-all"
                style={{ background: 'linear-gradient(135deg,#00f5ff,#00a8cc)', boxShadow: '0 10px 25px rgba(0,245,255,0.2)' }}
              >
                <Download size={15} />
                Download Resume
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.85)' }}
              >
                Get In Touch
              </motion.button>
            </div>
          </div>

          <div className="w-full lg:w-80 rounded-2xl overflow-hidden" style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(0,245,255,0.15)' }}>
            <div className="flex items-center gap-2 px-4 py-2.5" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(0,0,0,0.3)' }}>
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 opacity-80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500 opacity-80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 opacity-80" />
              </div>
              <div className="flex items-center gap-1.5 mx-auto">
                <Terminal size={11} style={{ color: '#00f5ff' }} />
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>ai_workspace.py</span>
              </div>
              <Wifi size={11} style={{ color: '#00ff88' }} />
            </div>
            <div className="p-4 space-y-2 font-mono text-xs">
              {terminalLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="flex items-start gap-2"
                >
                  <span style={{ color: line.color, minWidth: 12 }}>{line.prefix}</span>
                  <span style={{ color: 'rgba(255,255,255,0.95)' }}>{line.text}</span>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ delay: 0.4, duration: 1, repeat: Infinity }}
                className="flex items-center gap-2"
              >
                <span style={{ color: '#00f5ff' }}>{'>'}</span>
                <span className="w-2 h-4 inline-block" style={{ background: '#00f5ff', opacity: 0.15 }} />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <ScrollReveal direction="up">
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-white">Overview Metrics</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {metrics.map((metric, i) => (
              <MetricCard key={metric.label} metric={metric} index={i} />
            ))}
          </div>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ScrollReveal direction="up">
          <div className="p-6 rounded-2xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.2)' }}>
            <h3 className="text-sm font-semibold text-white mb-4">Core Expertise</h3>
            <div className="space-y-3">
              {[
                { label: 'Python & ML', pct: 70, color: '#00f5ff' },
                { label: 'Data Analysis', pct: 65, color: '#00ff88' },
                { label: 'Deep Learning', pct: 45, color: '#a78bfa' },
                { label: 'Web Development', pct: 50, color: '#60a5fa' },
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between text-xs mb-1">
                    <span style={{ color: 'rgba(255,255,255,0.8)' }}>{item.label}</span>
                    <span style={{ color: item.color }}>{item.pct}%</span>
                  </div>
                  <div className="h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.15)' }}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                      className="h-full rounded-full"
                      style={{ background: `linear-gradient(90deg,${item.color},${item.color}88)` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.05}>
          <div className="p-6 rounded-2xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.2)' }}>
            <h3 className="text-sm font-semibold text-white mb-4">Recent Activity</h3>
            <div className="space-y-3">
              {[
                { action: 'Building premium internship portfolio', time: 'Current', color: '#00f5ff' },
                { action: 'Learning Python and Machine Learning', time: 'Ongoing', color: '#00ff88' },
                { action: 'Developing AI + Web projects', time: 'Current', color: '#a78bfa' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: item.color }} />
                  <span className="text-xs flex-1" style={{ color: 'rgba(255,255,255,0.7)' }}>{item.action}</span>
                  <span className="text-xs" style={{ color: 'rgba(255,255,255,0.40)' }}>{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </motion.div>
  );
}
