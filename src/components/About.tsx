import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Code2, Lightbulb, Coffee, Rocket } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const highlights = [
  { icon: GraduationCap, label: 'Education', value: 'BS in AI & Data Science', sub: 'IIT Jodhpur', color: '#00f5ff' },
  { icon: MapPin, label: 'Location', value: 'Jodhpur, Rajasthan', sub: 'India', color: '#00ff88' },
  { icon: Code2, label: 'Primary Stack', value: 'Python, ML, React', sub: 'Full-stack AI', color: '#a78bfa' },
  { icon: Coffee, label: 'Focus', value: 'AI & Software Development', sub: 'Building practical projects', color: '#f59e0b' },
];

const timeline = [
  { year: '2025', event: 'Cleared JEE & Joined IIT Jodhpur', desc: 'Joined BS in AI & Data Science in July 2025', color: '#00f5ff' },
  { year: '2025', event: 'Completed First Semester', desc: 'Built foundations in coursework and programming', color: '#00ff88' },
  { year: '2026', event: 'Building Portfolio Projects', desc: 'Developing AI + Web projects and strengthening technical skills', color: '#a78bfa' },
  { year: '2026', event: 'Targeting Summer Internships', desc: 'Preparing portfolio and applying for internship opportunities', color: '#f59e0b' },
  { year: '2027', event: 'Expanding into Advanced ML Projects', desc: 'Expanding into deeper machine learning and applied AI systems', color: '#00f5ff' },
];

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <div>
        <h2 className="text-2xl font-bold text-white mb-1">About Me</h2>
        <p className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>AI student, builder &amp; aspiring researcher</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {highlights.map((item, i) => {
          const Icon = item.icon;
          return (
            <ScrollReveal key={item.label} delay={i * 0.03} direction="up">
              <motion.div
                whileHover={{ y: -3 }}
                className="p-5 rounded-2xl"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-3" style={{ background: `${item.color}18`, border: `1px solid ${item.color}30` }}>
                  <Icon size={16} style={{ color: item.color }} />
                </div>
                <p className="text-xs mb-1" style={{ color: 'rgba(255,255,255,0.35)' }}>{item.label}</p>
                <p className="text-sm font-semibold text-white leading-tight">{item.value}</p>
                <p className="text-xs mt-0.5" style={{ color: item.color }}>{item.sub}</p>
              </motion.div>
            </ScrollReveal>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ScrollReveal direction="up">
          <div className="p-6 rounded-2xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)' }}>
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb size={16} style={{ color: '#00f5ff' }} />
              <h3 className="text-sm font-semibold text-white">My Story</h3>
            </div>
            <div className="space-y-3 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
              <p>
                I'm an AI & Data Science student at IIT Jodhpur, currently building my foundations in Python, SQL, data analysis and machine learning. I enjoy working with tools like Excel, Power BI, Google Sheets, Weka and Google Colab while building practical projects and strengthening problem-solving skills.
              </p>
              <p>
                Right now, I'm focused on learning, building and preparing for internship opportunities.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.05}>
          <div className="p-6 rounded-2xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)' }}>
            <div className="flex items-center gap-2 mb-4">
              <Rocket size={16} style={{ color: '#a78bfa' }} />
              <h3 className="text-sm font-semibold text-white">Timeline</h3>
            </div>
            <div className="relative">
              <div className="absolute left-3 top-2 bottom-2 w-px" style={{ background: 'rgba(255,255,255,0.08)' }} />
              <div className="space-y-4">
                {timeline.map((item, i) => (
                  <ScrollReveal key={i} delay={i * 0.03} direction="up">
                    <div className="flex gap-4 pl-8 relative">
                      <span className="absolute left-1.5 top-1.5 w-3 h-3 rounded-full border-2 border-[#050514]" style={{ background: item.color, boxShadow: `0 0 8px ${item.color}` }} />
                      <div>
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-xs font-mono font-bold" style={{ color: item.color }}>{item.year}</span>
                          <span className="text-xs font-semibold text-white">{item.event}</span>
                        </div>
                        <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{item.desc}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </motion.div>
  );
}
