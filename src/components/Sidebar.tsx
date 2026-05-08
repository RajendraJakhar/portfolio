import { LayoutDashboard, User, Zap, FolderOpen, Award, Mail, Github, Linkedin, Youtube, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import type { SectionId } from '../types';

const navItems = [
  { id: 'dashboard' as SectionId, label: 'Dashboard', icon: LayoutDashboard },
  { id: 'about' as SectionId, label: 'About', icon: User },
  { id: 'skills' as SectionId, label: 'Skills', icon: Zap },
  { id: 'projects' as SectionId, label: 'Projects', icon: FolderOpen },
  { id: 'certifications' as SectionId, label: 'Certifications', icon: Award },
  { id: 'contact' as SectionId, label: 'Contact', icon: Mail },
];

interface SidebarProps {
  active: SectionId;
  onChange: (id: SectionId) => void;
}

const colorMap: Record<SectionId, string> = {
  dashboard: 'from-cyan-500 to-blue-500',
  about: 'from-green-400 to-cyan-500',
  skills: 'from-purple-500 to-pink-500',
  projects: 'from-cyan-400 to-green-400',
  certifications: 'from-blue-400 to-purple-500',
  contact: 'from-green-400 to-blue-500',
};

export default function Sidebar({ active, onChange }: SidebarProps) {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 z-50 flex flex-col" style={{ background: 'rgba(5,5,20,0.95)', borderRight: '1px solid rgba(255,255,255,0.10)' }}>
      <div className="px-6 py-8">
        <div className="flex items-center gap-3 mb-1">
          <div className="relative w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#00f5ff,#7c3aed)' }}>
            <span className="text-white font-bold text-lg">RK</span>
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-green-400 border-2 border-[#050514]" />
          </div>
          <div>
            <p className="text-white font-semibold text-lg leading-tight">Rajendra Kumar</p>
            
          </div>
        </div>
        <div
 className="mt-3 px-3 py-2 rounded-xl text-center"
 style={{
   background:'rgba(0,245,255,0.05)',
   border:'1px solid rgba(0,245,255,0.30)',
   color:'#d6ffff'
 }}
>
<span className="text-base font-bold">
 IIT Jodhpur 
  </span>

  <br />

  <span className="text-sm">
    BS in AI & Data Science 
  </span>
</div>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;
          return (
            <motion.button
              key={item.id}
              onClick={() => onChange(item.id)}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.97 }}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 group relative overflow-hidden"
              style={
                isActive
                  ? { background: 'rgba(0,245,255,0.1)', border: '1px solid rgba(0,245,255,0.2)', color: '#fff' }
                  : { background: 'transparent', border: '1px solid transparent', color: 'rgba(255,255,255,0.45)' }
              }
            >
              {isActive && (
                <motion.div
                  layoutId="activeNav"
                  className={`absolute left-0 top-0 h-full w-1 rounded-r-full bg-gradient-to-b ${colorMap[item.id]}`}
                />
              )}
              <span
                className="relative z-10"
                style={isActive ? { color: '#00f5ff' } : { color: 'rgba(255,255,255,0.4)' }}
              >
                <Icon size={16} />
              </span>
              <span className="relative z-10">{item.label}</span>
              {isActive && <ChevronRight size={14} className="ml-auto relative z-10" style={{ color: '#00f5ff' }} />}
            </motion.button>
          );
        })}
      </nav>

      <div className="px-6 pb-6">
        <div className="pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <p className="text-xl mb-3" style={{ color: 'rgba(255,255,255,0.70)' }}>Connect</p>
          <div className="flex gap-3">
            {[
               { Icon: Github, href: 'https://github.com/RajendraJakhar' },

               { Icon: Linkedin, href: 'https://linkedin.com/in/rajendrajakhar' },

               { Icon: Mail, href: 'mailto:b24bs2273@iitj.ac.in' },

               { Icon: Youtube, href: 'https://youtube.com/@RajendraJakharIITian' },
            ].map(({ Icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors"
                style={{ background:'rgba(0,245,255,0.10)', border:'1px solid rgba(0,245,255,0.50)', color:'#00f5ff', boxShadow:'0 0 10px rgba(0,245,255,0.02)'
                               }}
              >
                <Icon size={17} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
