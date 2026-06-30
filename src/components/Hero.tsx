export function Hero() {
  return (
    <section className="relative min-h-[795px] flex items-center justify-center px-margin-mobile md:px-margin-desktop py-section-gap overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover object-center opacity-80 mix-blend-multiply"
          alt="High-end luxury beauty studio hero image."
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAicEwhZT_eyQuY5xvJsoTaGPkKZszFgUIYYjffye0Y002HrvucFe425CBGz5pfYY0LParlGTdIwzmvoJjXMUeGzK5S_JXlzNnAkEJ466V6MyqFZWAKw-XJzzO5PtMIn9Z8BGPQOiRQyiCnb9RSXjV4a6JTY26g_Ujgb62vofgDPteyzR2FOLRe7ae68P14McBPEX87-yoHz9yzSS9mZjds3Se0_m2y_o9WPpbxzmIOQol56frDDVUXACFyggimyQ6Mli3HFADsnMs"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent z-10"></div>
      </div>
      <div className="relative z-20 max-w-3xl mx-auto text-center flex flex-col items-center gap-8 mt-32">
        <h1 className="font-display-lg-mobile md:font-display-lg text-[48px] md:text-[64px] leading-tight font-bold text-on-background drop-shadow-sm">
          Tu belleza,<br />nuestra ciencia de la seguridad
        </h1>
        <p className="font-body-lg text-lg md:text-xl text-on-surface-variant max-w-xl mx-auto">
          Transformación estética con los más altos estándares de calidad.
        </p>
        <button className="bg-primary text-on-primary font-label-md text-sm uppercase tracking-wider py-4 px-10 rounded-full hover:bg-on-surface-variant transition-all duration-300 mt-4 glow-button">
          Agendar Cita
        </button>
      </div>
    </section>
  );
}
