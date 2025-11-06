function About() {
  return (
    <section id="about" className="relative w-full bg-[#F9F9F9] text-[#0D1B2A]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-20">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-serif tracking-wide">About Orvique</h2>
          <p className="mt-4 text-neutral-600 max-w-2xl">
            We craft experiences that whisper luxury — balanced, calm, and deeply elegant. Our philosophy
            embraces space, light, and clarity. Every detail is designed with intention.
          </p>
        </div>

        {/* Elegant image grid with soft blur transitions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            'https://images.unsplash.com/photo-1512207853169-5b1b22c9379f?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1515611762076-c3a43c6730a1?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1542496658-e33a6d0d0d58?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1518112166137-85f9979a43c4?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1533236897111-3e94666b2edf?q=80&w=1200&auto=format&fit=crop'
          ].map((src, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl bg-white shadow-sm">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#60A5FA]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <img
                src={src}
                alt="Orvique mood"
                className="h-64 w-full object-cover transform scale-105 transition duration-700 group-hover:scale-110 group-hover:blur-[1px]"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
