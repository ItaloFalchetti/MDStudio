const testimonials = [
  {
    text: "Mis uñas quedaron perfectas y duran semanas sin astillarse. El nivel de higiene es impresionante, me sentí en buenas manos desde el primer momento.",
    name: "VALENTINA R.",
    service: "Manicura Softgel",
  },
  {
    text: "El lifting de pestañas cambió mi rutina de maquillaje por completo. Me despierto con la mirada abierta y natural. ¡Recomiendo 100%!",
    name: "CAMILA M.",
    service: "Lifting de Pestañas",
  },
  {
    text: "Un estudio que combina estética de primer nivel con una atención al detalle que pocas veces se ve. Mahany es una profesional excepcional.",
    name: "LUCÍA F.",
    service: "Kapping",
  },
];

export function Testimonials() {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-low" id="testimonios">
      <div className="max-w-container-max mx-auto">
        <div className="mb-12">
          <p className="font-label-sm text-xs uppercase tracking-widest text-secondary mb-3">
            Lo que dicen nuestras clientas
          </p>
          <h2 className="font-headline-md text-3xl md:text-4xl text-on-background">
            Resultados que hablan.
          </h2>
        </div>

        <div className="flex flex-col divide-y divide-outline-variant">
          {testimonials.map((t, i) => (
            <div key={i} className="py-8 flex flex-col md:flex-row md:items-start gap-4 md:gap-16">
              <div className="flex-shrink-0">
                <span className="text-secondary tracking-widest text-sm">★★★★★</span>
              </div>
              <div className="flex-grow">
                <p className="font-body-lg text-base md:text-lg text-on-surface-variant italic mb-4 leading-relaxed">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <span className="font-label-md text-xs uppercase tracking-wider text-on-background">
                    {t.name}
                  </span>
                  <span className="text-outline-variant">·</span>
                  <span className="font-label-sm text-xs text-secondary tracking-wide">
                    {t.service}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
