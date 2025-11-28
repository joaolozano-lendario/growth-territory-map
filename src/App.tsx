import { ProgressBar } from './components/ProgressBar';
import { Navigation } from './components/Navigation';
import { Prologue } from './sections/Prologue';
import { Act1Foundation } from './sections/Act1Foundation';
import { Act2Funnels } from './sections/Act2Funnels';
import { Act3Arsenal } from './sections/Act3Arsenal';
import { Act4Machine } from './sections/Act4Machine';
import { Act5Metrics } from './sections/Act5Metrics';
import { Epilogue } from './sections/Epilogue';

function App() {
  return (
    <div className="relative min-h-screen bg-[#030810]">
      {/* Progress bar */}
      <ProgressBar />

      {/* Navigation */}
      <Navigation />

      {/* Atmospheric layers */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#030810] via-[#050b14] to-[#030810]" />

        {/* Floating orbs */}
        <div className="absolute top-[10%] left-[5%] w-[40%] h-[40%] bg-cyan-900/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[20%] right-[10%] w-[35%] h-[35%] bg-purple-900/10 blur-[120px] rounded-full" />
        <div className="absolute top-[60%] left-[20%] w-[30%] h-[30%] bg-emerald-900/10 blur-[100px] rounded-full" />

        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]" />
      </div>

      {/* Main content */}
      <main className="relative z-10">
        <Prologue />
        <Act1Foundation />
        <Act2Funnels />
        <Act3Arsenal />
        <Act4Machine />
        <Act5Metrics />
        <Epilogue />
      </main>

      {/* Footer spacer */}
      <div className="h-20 bg-[#030810]" />
    </div>
  );
}

export default App;
