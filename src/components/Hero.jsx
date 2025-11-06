import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] bg-gradient-to-b from-[#0D1B2A] via-[#0D1B2A] to-[#0f2133] text-white overflow-hidden">
      {/* Spline Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays for depth (do not block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0D1B2A]/70 via-[#0D1B2A]/60 to-[#0D1B2A]/85" />
      <div className="pointer-events-none absolute -inset-x-20 top-0 h-64 bg-gradient-to-b from-[#60A5FA]/20 to-transparent blur-3xl" />

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 pt-24 pb-16 flex flex-col items-start">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-wide leading-tight">
          <span className="opacity-90">Orvique —</span> <span className="opacity-100">Where Calm Meets Luxury.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-[#F9F9F9]/90 text-base sm:text-lg leading-relaxed">
          Discover a world of refined elegance and quiet sophistication.
        </p>

        <div className="mt-10 flex items-center gap-4">
          <a
            href="#collections"
            className="group relative inline-flex items-center justify-center rounded-full px-6 py-3 text-sm sm:text-base font-medium tracking-wide"
          >
            <span className="absolute inset-0 rounded-full bg-[#60A5FA]/20 blur-md opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <span className="relative rounded-full border border-[#60A5FA]/60 bg-white/5 px-6 py-3 text-white backdrop-blur-md transition-colors duration-300 hover:bg-white/10">
              Explore the Essence
            </span>
          </a>
        </div>

        {/* Tagline with thin letter spacing */}
        <p className="mt-12 text-sm uppercase tracking-[0.35em] text-[#F9F9F9]/70">
          Refined • Serene • Timeless
        </p>
      </div>
    </section>
  );
}

export default Hero;
