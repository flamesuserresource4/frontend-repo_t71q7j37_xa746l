import { Star } from 'lucide-react';

function Testimonials() {
  const testimonials = [
    {
      name: 'Elena M.',
      quote:
        'A quiet luxury that feels deeply personal. The attention to detail is breathtaking.',
      rating: 5,
    },
    {
      name: 'Noah R.',
      quote:
        'Every interaction is serene. It’s like stepping into a tranquil, luminous space.',
      rating: 5,
    },
    {
      name: 'Sofia L.',
      quote: 'Elegant, restrained, and utterly captivating. A modern classic.',
      rating: 5,
    },
  ];

  return (
    <section className="relative w-full bg-[#F9F9F9]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-20">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-serif tracking-wide text-[#0D1B2A]">Experiences</h2>
          <p className="mt-4 text-neutral-600 max-w-2xl">
            Words from those who have explored the essence of Orvique.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl bg-white/80 backdrop-blur border border-[#1E3A8A]/10 p-6 shadow-sm">
              <div className="flex items-center gap-1 text-[#60A5FA]">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-neutral-700">“{t.quote}”</p>
              <p className="mt-6 text-sm uppercase tracking-[0.25em] text-[#0D1B2A]">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
