import { motion } from 'framer-motion';
import { Github, ExternalLink, Star, GitFork, Activity } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { projects, githubStats } from '../data/portfolio';

const colorMap: Record<string, { text: string; glow: string; border: string; bg: string }> = {
  cyan: { text: '#00f5ff', glow: 'rgba(0,245,255,0.15)', border: 'rgba(0,245,255,0.25)', bg: 'rgba(0,245,255,0.07)' },
  green: { text: '#00ff88', glow: 'rgba(0,255,136,0.15)', border: 'rgba(0,255,136,0.25)', bg: 'rgba(0,255,136,0.07)' },
  purple: { text: '#a78bfa', glow: 'rgba(167,139,250,0.15)', border: 'rgba(167,139,250,0.25)', bg: 'rgba(167,139,250,0.07)' },
  blue: { text: '#60a5fa', glow: 'rgba(96,165,250,0.15)', border: 'rgba(96,165,250,0.25)', bg: 'rgba(96,165,250,0.07)' },
};

const statusConfig: Record<string, { label: string; color: string }> = {
  live: { label: 'Live', color: '#00ff88' },
  'in-progress': { label: 'In Progress', color: '#f59e0b' },
  completed: { label: 'Completed', color: '#60a5fa' },
};

const langColors: Record<string, string> = {
  cyan: '#00f5ff',
  green: '#00ff88',
  purple: '#a78bfa',
  blue: '#60a5fa',
};

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="space-y-8"
    >
      <div>
        <h2 className="text-2xl font-bold text-white mb-1">Projects</h2>
        <p className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>Currently building projects daily to strengthen my AI & Data Science skills.</p>
      </div>

      <ScrollReveal direction="up">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-2">
          {[
            { label: 'Total Repos', value: githubStats.totalRepos, icon: Github, color: '#00f5ff' },
            { label: 'Stars Earned', value: githubStats.totalStars, icon: Star, color: '#f59e0b' },
            { label: 'Forks', value: githubStats.totalForks, icon: GitFork, color: '#00ff88' },
            { label: 'Contributions', value: githubStats.contributions, icon: Activity, color: '#a78bfa' },
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
                  <p className="text-xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{stat.label}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </ScrollReveal>

      <div>
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <h3 className="text-sm font-semibold text-white">Featured Projects</h3>
        </div>
        <div className="space-y-4">
          {featured.map((project, i) => {
            const c = colorMap[project.color];
            const status = statusConfig[project.status];
            return (
              <ScrollReveal key={project.id} delay={i * 0.05} direction="up">
                <motion.div
                  whileHover={{ y: -2 }}
                  className="p-6 rounded-2xl relative overflow-hidden group"
                  style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${c.border}`, boxShadow: `0 0 20px ${c.glow}` }}
                >
                  <div className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none" style={{ background: c.text, transform: 'translate(30%,-30%)' }} />
                  <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h3 className="text-base font-semibold text-white">{project.title}</h3>
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium" style={{ background: `${status.color}14`, color: status.color }}>
                          <span className="w-1 h-1 rounded-full" style={{ background: status.color }} />
                          {status.label} {project.title.includes("Coming Soon") && " 🚧"}
                        </span>
                      </div>
                      <p className="text-sm mb-3" style={{ color: 'rgba(255,255,255,0.55)' }}>{project.longDescription}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="px-2.5 py-1 rounded-lg text-xs font-medium" style={{ background: c.bg, border: `1px solid ${c.border}`, color: c.text }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-row lg:flex-col gap-2 flex-shrink-0">
                      {project.demo && (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-black"
                          style={{ background: `linear-gradient(135deg,${c.text},${c.text}cc)` }}
                        >
                          <ExternalLink size={12} />
                          Live Demo
                        </motion.a>
                      )}
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold"
                          style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.8)' }}
                        >
                          <Github size={12} />
                          GitHub
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-white mb-4">More Projects</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {rest.map((project, i) => {
            const c = colorMap[project.color];
            const status = statusConfig[project.status];
            return (
              <ScrollReveal key={project.id} delay={i * 0.04} direction="up">
                <motion.div
                  whileHover={{ y: -3 }}
                  className="p-5 rounded-2xl group relative overflow-hidden"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs" style={{ background: `${status.color}14`, color: status.color }}>
                      <span className="w-1 h-1 rounded-full" style={{ background: status.color }} />
                      {status.label}
                    </span>
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={14} style={{ color: 'rgba(255,255,255,0.4)' }} className="hover:text-white transition-colors" />
                      </a>
                    )}
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-xs leading-relaxed mb-3" style={{ color: 'rgba(255,255,255,0.5)' }}>{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded-md text-xs" style={{ background: c.bg, color: c.text }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      <ScrollReveal direction="up">
        <div className="p-6 rounded-2xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)' }}>
          <h3 className="text-sm font-semibold text-white mb-4">Language Distribution</h3>
          <div className="space-y-3">
            {githubStats.languages.map((lang) => (
              <div key={lang.name}>
                <div className="flex justify-between text-xs mb-1">
                  <span style={{ color: 'rgba(255,255,255,0.6)' }}>{lang.name}</span>
                  <span style={{ color: langColors[lang.color] }}>{lang.percentage}%</span>
                </div>
                <div className="h-2 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="h-full rounded-full"
                    style={{ background: `linear-gradient(90deg,${langColors[lang.color]},${langColors[lang.color]}88)`, boxShadow: `0 0 8px ${langColors[lang.color]}` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </motion.div>
  );
}
