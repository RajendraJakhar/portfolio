import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import type { SectionId } from './types';

const sectionComponents: Record<SectionId, React.ComponentType<{ onNavigate?: (id: SectionId) => void }>> = {
  dashboard: Dashboard,
  about: About,
  skills: Skills,
  projects: Projects,
  certifications: Certifications,
  contact: Contact,
};

export default function App() {
  const [active, setActive] = useState<SectionId>('dashboard');

  const ActiveSection = sectionComponents[active];

  return (
    <div className="min-h-screen" style={{ background: '#050514' }}>
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-[0.04] blur-3xl"
          style={{ background: 'radial-gradient(circle,#7c3aed,transparent)' }}
        />
        <div
          className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full opacity-[0.03] blur-3xl"
          style={{ background: 'radial-gradient(circle,#00f5ff,transparent)' }}
        />
        <div
          className="absolute -bottom-40 left-1/3 w-[500px] h-[500px] rounded-full opacity-[0.03] blur-3xl"
          style={{ background: 'radial-gradient(circle,#00ff88,transparent)' }}
        />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.1) 1px,transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <Sidebar active={active} onChange={setActive} />

      <main className="pl-64 min-h-screen">
        <div className="max-w-5xl mx-auto px-8 py-8 pb-16">
          <AnimatePresence mode="sync">
            <ActiveSection key={active} onNavigate={setActive} />
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
