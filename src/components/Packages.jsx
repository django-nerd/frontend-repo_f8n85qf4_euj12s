import React from 'react';

const tiers = [
  {
    name: 'Basic Weapon',
    price: '$20–$25',
    time: '2–4 days',
    features: [
      'Simple custom model',
      'Basic attack animation',
      '1 skill / ability',
    ],
    accent: 'from-neutral-900 to-neutral-800',
  },
  {
    name: 'Advanced Weapon',
    price: '$30–$40',
    time: '4–7 days',
    features: [
      'Complex model & materials',
      'Multiple skills / combos',
      'Impact effects & sound',
    ],
    highlight: true,
    accent: 'from-red-900/40 to-amber-900/20',
  },
  {
    name: 'Cinematic Weapon',
    price: '$50+',
    time: '7–14 days',
    features: [
      'Full animation set',
      'Cutscene integration',
      'Advanced particles & SFX',
    ],
    accent: 'from-neutral-900 to-black',
  },
];

const Packages = () => {
  return (
    <section id="packages" className="relative bg-black py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.06),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Commission Packages</h2>
          <p className="mt-3 text-neutral-300">Choose a tier that fits your project scope and timeline.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-xl border ${tier.highlight ? 'border-amber-400/30 shadow-[0_0_50px_rgba(255,153,0,0.15)]' : 'border-white/10'} bg-gradient-to-br ${tier.accent} p-6`}
            >
              {tier.highlight && (
                <div className="absolute -top-3 right-4 rounded-full border border-amber-400/40 bg-amber-500/10 px-3 py-1 text-xs text-amber-300">Popular</div>
              )}
              <h3 className="text-xl font-medium">{tier.name}</h3>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-2xl font-semibold text-amber-300">{tier.price}</span>
                <span className="text-xs text-neutral-400">est.</span>
              </div>
              <p className="mt-2 text-sm text-neutral-300">Delivery: {tier.time}</p>
              <ul className="mt-4 space-y-2">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-neutral-200">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" /> {f}
                  </li>
                ))}
              </ul>
              <a
                href="#order"
                className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-gradient-to-r from-red-600 to-amber-600 px-4 py-2 text-sm font-medium shadow-[0_0_24px_rgba(255,0,0,0.25)] transition hover:brightness-110"
              >
                Start with {tier.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
