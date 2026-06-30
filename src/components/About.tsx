import logoMD from "../assets/images/Logo MD Studio.png";

export function About() {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-low" id="sobre-nosotros">
      <div className="max-w-container-max mx-auto flex flex-col md:flex-row items-center gap-16">
        {/* Logo */}
        <div className="w-full md:w-2/5 flex justify-center md:justify-start">
          <img
            src={logoMD}
            alt="MD Studio"
            className="w-52 sm:w-64 md:w-80"
            style={{ mixBlendMode: "multiply" }}
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-3/5 flex flex-col gap-6">
          <p className="font-label-sm text-xs uppercase tracking-widest text-secondary">
            Sobre el Estudio
          </p>
          <h2 className="font-display-lg text-3xl md:text-4xl text-on-background leading-tight">
            Donde la estética<br />se convierte en arte.
          </h2>
          <p className="font-body-lg text-base md:text-lg text-on-surface-variant leading-relaxed">
            Mahany Dote Studio nace de la convicción de que la belleza y el bienestar van de la mano. Cada servicio es ejecutado con precisión clínica, materiales premium y una atención al detalle que transforma cada visita en una experiencia única.
          </p>
          <p className="font-body-lg text-base text-on-surface-variant leading-relaxed">
            Creemos que el lujo verdadero no es solo estético — es sentirse segura, cuidada y en manos de una profesional que entiende tu visión.
          </p>
        </div>
      </div>
    </section>
  );
}
