export function Hero() {
  return (
    <section id="hero-section" className="relative h-screen min-h-[600px] flex items-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover object-center"
          alt="High-end luxury beauty studio hero image."
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAicEwhZT_eyQuY5xvJsoTaGPkKZszFgUIYYjffye0Y002HrvucFe425CBGz5pfYY0LParlGTdIwzmvoJjXMUeGzK5S_JXlzNnAkEJ466V6MyqFZWAKw-XJzzO5PtMIn9Z8BGPQOiRQyiCnb9RSXjV4a6JTY26g_Ujgb62vofgDPteyzR2FOLRe7ae68P14McBPEX87-yoHz9yzSS9mZjds3Se0_m2y_o9WPpbxzmIOQol56frDDVUXACFyggimyQ6Mli3HFADsnMs"
        />
        {/* Dark overlay — stronger at bottom, fades to transparent at top */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />
      </div>

      {/* Content — bottom left */}
      <div className="relative z-20 w-full px-margin-mobile md:px-margin-desktop pb-16 md:pb-24 max-w-container-max mx-auto">
        <p className="font-label-sm text-xs uppercase tracking-widest text-white/60 mb-4">
          Estudio de Estética
        </p>
        <h1 className="font-display-lg text-[38px] sm:text-[52px] md:text-[72px] leading-none font-black text-white mb-8 max-w-2xl">
          Tu belleza,<br />nuestra ciencia.
        </h1>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <a
            href="#agendar"
            className="font-label-md text-sm uppercase tracking-wider border border-white/60 text-white px-8 py-4 hover:bg-white hover:text-black transition-all duration-300"
          >
            Agendar Cita →
          </a>
          {/* Scroll indicator */}
          <div className="flex items-center gap-3 text-white/40">
            <div className="w-6 h-[1px] bg-white/40" />
            <span className="font-label-sm text-xs uppercase tracking-widest">Scroll</span>
          </div>
        </div>
      </div>
    </section>
  );
}
