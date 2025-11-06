function Collections() {
  const items = [
    {
      title: 'Azure No. 1',
      image:
        'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Iridescent Calm',
      image:
        'https://images.unsplash.com/photo-1505575967455-40e256f73376?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Champagne Whisper',
      image:
        'https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  return (
    <section id="collections" className="relative w-full bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-20">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-serif tracking-wide text-[#0D1B2A]">Collections</h2>
            <p className="mt-4 text-neutral-600 max-w-xl">
              Explore a curated range of pieces with flame-blue highlights and soft gold accents.
            </p>
          </div>
          <div className="hidden sm:block h-px flex-1 bg-gradient-to-r from-[#D4AF37]/60 via-[#D4AF37]/20 to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <article key={item.title} className="group relative overflow-hidden rounded-2xl border border-[#1E3A8A]/10 bg-[#F9F9F9]">
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-[#60A5FA]/20" />
              <img
                src={item.image}
                alt={item.title}
                className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-medium text-[#0D1B2A]">{item.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">Limited edition • Refined finish</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Collections;
