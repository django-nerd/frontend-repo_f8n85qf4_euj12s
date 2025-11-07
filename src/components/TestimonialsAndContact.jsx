import React, { useState } from 'react';

const testimonials = [
  {
    quote: 'Incredible quality! Felt like a boss weapon in an RPG.',
    author: 'Client Feedback',
  },
  {
    quote: 'Smooth animations, clean effects — totally worth it.',
    author: 'Commissioner Review',
  },
  {
    quote: 'Polished, optimized, and thrilling to use in-game.',
    author: 'Server Owner',
  },
];

const TestimonialsAndContact = () => {
  const [form, setForm] = useState({ name: '', email: '', budget: '', description: '' });
  const [status, setStatus] = useState('');

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    // No backend in this task; simulate submission
    setStatus('Thanks! Your request has been received. Expect a reply with a custom quote.');
    setForm({ name: '', email: '', budget: '', description: '' });
  };

  return (
    <section id="order" className="relative bg-black py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,0,0,0.06),transparent_60%)]" />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 md:grid-cols-5">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-semibold sm:text-4xl">Testimonials</h2>
          <div className="mt-6 space-y-4">
            {testimonials.map((t, idx) => (
              <div key={idx} className="rounded-xl border border-white/10 bg-neutral-900/40 p-5">
                <p className="text-neutral-200">“{t.quote}”</p>
                <p className="mt-2 text-xs text-neutral-400">— {t.author}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-3">
          <h2 className="text-3xl font-semibold sm:text-4xl">Order Form</h2>
          <p className="mt-2 text-neutral-300">Please describe your weapon concept in detail. You’ll receive a custom quote and timeline.</p>
          <form onSubmit={onSubmit} className="mt-6 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm text-neutral-300">Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  required
                  className="w-full rounded-md border border-white/10 bg-neutral-900/60 px-3 py-2 text-sm text-white placeholder-neutral-500 outline-none focus:border-amber-400/40 focus:ring-1 focus:ring-amber-400/30"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-neutral-300">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  required
                  className="w-full rounded-md border border-white/10 bg-neutral-900/60 px-3 py-2 text-sm text-white placeholder-neutral-500 outline-none focus:border-amber-400/40 focus:ring-1 focus:ring-amber-400/30"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <label className="mb-1 block text-sm text-neutral-300">Preferred Budget</label>
              <input
                name="budget"
                value={form.budget}
                onChange={onChange}
                className="w-full rounded-md border border-white/10 bg-neutral-900/60 px-3 py-2 text-sm text-white placeholder-neutral-500 outline-none focus:border-amber-400/40 focus:ring-1 focus:ring-amber-400/30"
                placeholder="$30–$60"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm text-neutral-300">Project Description</label>
              <textarea
                name="description"
                value={form.description}
                onChange={onChange}
                required
                rows={6}
                className="w-full rounded-md border border-white/10 bg-neutral-900/60 px-3 py-2 text-sm text-white placeholder-neutral-500 outline-none focus:border-amber-400/40 focus:ring-1 focus:ring-amber-400/30"
                placeholder="Describe your weapon concept, skills, effects, and any references."
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-red-600 to-amber-600 px-5 py-2.5 text-sm font-medium shadow-[0_0_24px_rgba(255,0,0,0.25)] transition hover:brightness-110"
            >
              Submit Request
            </button>
            {status && <p className="mt-2 text-sm text-amber-300">{status}</p>}
          </form>
        </div>
      </div>

      <div className="relative mx-auto mt-20 max-w-6xl px-6 text-neutral-400">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        <footer className="mt-6 flex flex-col items-center justify-between gap-4 py-6 text-sm sm:flex-row">
          <div className="text-neutral-300">© {new Date().getFullYear()} Supercluster Studio · Unleash the vastness. Forge a Supercluster</div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-neutral-300 transition hover:text-amber-300">YouTube</a>
            <a href="#" className="text-neutral-300 transition hover:text-amber-300">Discord</a>
            <a href="#" className="text-neutral-300 transition hover:text-amber-300">Ko-fi</a>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default TestimonialsAndContact;
