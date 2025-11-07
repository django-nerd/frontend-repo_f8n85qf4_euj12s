import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative w-full bg-black py-20 text-neutral-200">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,0,0,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">About the Creator</h2>
          <p className="mt-2 text-sm uppercase tracking-widest text-red-300/70">Xyusou — Independent Bedrock Developer</p>
        </div>
        <div className="grid items-start gap-8 md:grid-cols-5">
          <div className="md:col-span-3">
            <p className="leading-relaxed text-neutral-300">
              I specialize in crafting custom weapons, animation systems, visual effects, and cinematic cutscenes for Minecraft Bedrock. Every asset is designed from scratch to feel powerful, responsive, and visually distinct — tailored to your concept and optimized for performance on Bedrock.
            </p>
            <p className="mt-4 leading-relaxed text-neutral-300">
              From dynamic skill chains and timing windows to impact VFX and sound design, I deliver complete, battle-ready experiences that elevate gameplay and presentation.
            </p>
          </div>
          <div className="md:col-span-2">
            <div className="rounded-xl border border-amber-400/20 bg-gradient-to-br from-neutral-900 to-black p-5 shadow-[0_0_40px_rgba(255,153,0,0.15)]">
              <h3 className="text-lg font-medium text-amber-300">What you can expect</h3>
              <ul className="mt-3 space-y-2 text-sm text-neutral-300">
                <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" /> Handcrafted models & animations</li>
                <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" /> Optimized behaviors & JSON/animation controllers</li>
                <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" /> Advanced particles, timing, and impact logic</li>
                <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" /> Cinematic cutscenes & sound design</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
