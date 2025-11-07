import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Packages from './components/Packages';
import Showcase from './components/Showcase';
import TestimonialsAndContact from './components/TestimonialsAndContact';

function App() {
  return (
    <div className="min-h-screen w-full bg-black font-['Inter','Manrope','system-ui'] text-white">
      {/* Simple nav */}
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#home" className="text-sm font-semibold tracking-wider text-white">
            Supercluster <span className="text-amber-300">Studio</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-neutral-300 sm:flex">
            <a className="hover:text-white" href="#about">About</a>
            <a className="hover:text-white" href="#packages">Packages</a>
            <a className="hover:text-white" href="#showcase">Showcase</a>
            <a className="rounded-md bg-gradient-to-r from-red-600 to-amber-600 px-3 py-1.5 text-white hover:brightness-110" href="#order">Order</a>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <About />
        <Packages />
        <Showcase />
        <TestimonialsAndContact />
      </main>
    </div>
  );
}

export default App;
