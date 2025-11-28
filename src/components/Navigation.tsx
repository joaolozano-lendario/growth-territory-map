import { useState, useEffect } from 'react';
import { tableOfContents } from '../data/content';

export function Navigation() {
  const [activeSection, setActiveSection] = useState('prologue');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = tableOfContents.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(tableOfContents[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[1001] md:hidden w-14 h-14 rounded-full bg-cyan-500/20 border border-cyan-500/30 backdrop-blur-sm flex items-center justify-center"
        aria-label="Toggle navigation"
      >
        <span className="text-cyan-400 text-xl">{isOpen ? '✕' : '☰'}</span>
      </button>

      {/* Navigation panel */}
      <nav
        className={`fixed right-0 top-0 h-full z-[1000] transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'
        }`}
      >
        <div className="h-full flex items-center pr-4 md:pr-6">
          <div className="bg-slate-900/80 backdrop-blur-md rounded-l-2xl border border-slate-700/50 p-4 md:p-3">
            <ul className="space-y-2">
              {tableOfContents.map((item, index) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`group flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-300 w-full text-left ${
                      activeSection === item.id
                        ? 'bg-cyan-500/20 text-cyan-400'
                        : 'hover:bg-slate-800/50 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <span className={`font-mono text-xs ${
                      activeSection === item.id ? 'text-cyan-400' : 'text-slate-600'
                    }`}>
                      {String(index).padStart(2, '0')}
                    </span>
                    <div className="hidden md:block">
                      <div className="font-display text-sm font-medium">{item.title}</div>
                      <div className="text-xs text-slate-500">{item.subtitle}</div>
                    </div>
                    <div className={`w-2 h-2 rounded-full md:hidden ${
                      activeSection === item.id ? 'bg-cyan-400' : 'bg-slate-600'
                    }`} />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
