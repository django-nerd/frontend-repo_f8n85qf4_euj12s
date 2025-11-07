import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient + vignette overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90" />
      <div className="pointer-events-none absolute inset-0" style={{ boxShadow: 'inset 0 0 200px rgba(0,0,0,0.6)' }} />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1 text-xs tracking-wide text-red-300/90">
          <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" /> Supercluster Studio
        </div>
        <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white drop-shadow-[0_0_20px_rgba(255,0,0,0.35)] sm:text-5xl md:text-6xl">
          Custom Weapons, Skills & Effects for Minecraft Bedrock.
        </h1>
        <p className="mt-5 max-w-2xl text-base text-neutral-300 sm:text-lg md:text-xl">
          Bring your ideas to life — cinematic, animated, and battle-ready.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#order"
            className="group relative inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-red-600 to-amber-600 px-6 py-3 text-sm font-medium text-white shadow-[0_0_30px_rgba(255,0,0,0.35)] transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-amber-400/40"
          >
            <span className="absolute inset-0 rounded-md opacity-0 blur transition group-hover:opacity-30" style={{ background: 'radial-gradient(closest-side, rgba(255,215,0,0.6), transparent)' }} />
            Order Commission
          </a>
          <a
            href="#showcase"
            className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-red-500/40"
          >
            View Showcase
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
