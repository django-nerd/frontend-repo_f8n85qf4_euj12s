import React from 'react';

const items = [
  { id: 1, title: 'Crimson Blade', thumb: 'https://images.unsplash.com/photo-1636294051222-0e774b2d6059?q=80&w=1200&auto=format&fit=crop' },
  { id: 2, title: 'Auric Halberd', thumb: 'https://images.unsplash.com/photo-1603569283847-1f8f0a5cae7c?q=80&w=1200&auto=format&fit=crop' },
  { id: 3, title: 'Voidcaster', thumb: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop' },
  { id: 4, title: 'Ember Pike', thumb: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop' },
  { id: 5, title: 'Storm Fang', thumb: 'https://images.unsplash.com/photo-1612544409026-59f1fdd35cfb?q=80&w=1200&auto=format&fit=crop' },
  { id: 6, title: 'Gilded Edge', thumb: 'https://images.unsplash.com/photo-1534794048419-48e478165dcc?q=80&w=1200&auto=format&fit=crop' },
];

const Showcase = () => {
  return (
    <section id="showcase" className="relative bg-black py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.06),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6 text-white">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Showcase Gallery</h2>
          <p className="mt-3 text-neutral-300">Highlights from past commissions. Hover to reveal motion.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {items.map((it) => (
            <div key={it.id} className="group relative overflow-hidden rounded-xl border border-white/10 bg-neutral-900/40">
              <img src={it.thumb} alt={it.title} className="h-48 w-full object-cover transition duration-500 group-hover:scale-105 group-hover:opacity-80" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-100 transition" />
              <div className="absolute inset-0 flex items-end justify-between p-4">
                <div>
                  <h3 className="text-sm font-medium text-white">{it.title}</h3>
                  <p className="text-xs text-neutral-300">Weapon Commission</p>
                </div>
                <div className="translate-y-4 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="rounded-md bg-white/10 px-2 py-1 text-[10px] uppercase tracking-wider text-amber-300 backdrop-blur">Play</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
