import Hero from './components/Hero';
import About from './components/About';
import Collections from './components/Collections';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="min-h-screen bg-[#0D1B2A] text-white">
      {/* Nav / Wordmark */}
      <header className="fixed top-0 inset-x-0 z-50 bg-gradient-to-b from-[#0D1B2A]/80 to-transparent backdrop-blur border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 h-16 flex items-center justify-between">
          <a href="#" className="font-serif text-xl tracking-wide">
            Orvique<span className="text-[#60A5FA]">•</span>
          </a>
          <nav className="hidden sm:flex items-center gap-8 text-sm text-white/80">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#collections" className="hover:text-white">Collections</a>
            <a href="#experiences" className="hover:text-white">Experiences</a>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <About />
        <Collections />
        <section id="experiences">
          <Testimonials />
        </section>
      </main>

      <footer className="bg-[#0D1B2A] text-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 py-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="font-serif text-lg">Orvique</p>
            <div className="h-px w-full sm:w-auto flex-1 bg-gradient-to-r from-[#D4AF37]/60 via-[#D4AF37]/20 to-transparent" />
            <p className="text-sm text-white/70">© {new Date().getFullYear()} Orvique. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
