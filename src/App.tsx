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

const sectionComponents: Record<SectionId, React.ComponentType<{ onNavigate: (id: SectionId) => void }>> = {
  dashboard: Dashboard,
  about: About,
  skills: Skills,
  projects: Projects,
  certifications: Certifications,
  contact: Contact,
};

export default function App() {
  const [active, setActive] = useState<SectionId>('dashboard');
  const [showMore, setShowMore] = useState(false);

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

      <div className="hidden md:block">
        <Sidebar active={active} onChange={setActive} />
      </div>

      <main className="md:pl-64 min-h-screen pb-20">
        <div className="max-w-5xl mx-auto px-8 py-8">
          <AnimatePresence mode="wait">
            <ActiveSection key={active} onNavigate={setActive} />
          </AnimatePresence>
        </div>
      </main>
      {/* ✅ Mobile Bottom Navigation */}
<div className="md:hidden fixed bottom-0 left-0 w-full bg-[#050514] border-t border-white/10 flex justify-around py-2 z-50">

  <div onClick={() => setActive('dashboard')} className="text-white text-xs flex flex-col items-center">
    🏠 <span>Home</span>
  </div>

  <div onClick={() => setActive('about')} className="text-white text-xs flex flex-col items-center">
    👤 <span>About</span>
  </div>

  <div onClick={() => setActive('projects')} className="text-white text-xs flex flex-col items-center">
    📁 <span>Projects</span>
  </div>

  <div onClick={() => setActive('contact')} className="text-white text-xs flex flex-col items-center">
    ✉️ <span>Contact</span>
  </div>

  {/* MORE BUTTON */}
  <div
    onClick={() => setShowMore(!showMore)}
    className="text-white text-xs flex flex-col items-center relative"
  >
    ☰ <span>More</span>

    {showMore && (
      <div className="absolute bottom-14 right-0 bg-[#0b0b1f] border border-white/10 rounded-xl p-2 flex flex-col gap-2 min-w-[120px] shadow-xl">
        
        <div
          onClick={() => {
            setActive('skills');
            setShowMore(false);
          }}
          className="text-white text-sm px-3 py-2 rounded-lg hover:bg-white/10"
        >
          ⚡ Skills
        </div>

        <div
          onClick={() => {
            setActive('certifications');
            setShowMore(false);
          }}
          className="text-white text-sm px-3 py-2 rounded-lg hover:bg-white/10"
        >
          🏆 Certifications
        </div>

      </div>
    )}
  </div>

</div>
    </div>
    );
}
