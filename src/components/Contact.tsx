import { MapPin, Clock, MessageCircle } from "lucide-react";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const WA_NUMBER = "56972182126";
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=Hola!%20Quiero%20agendar%20una%20cita%20en%20Mahany%20Dote%20Studio.`;

export function Contact() {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface" id="contacto">
      <div className="max-w-container-max mx-auto">
        <div className="mb-12">
          <p className="font-label-sm text-xs uppercase tracking-widest text-secondary mb-3">
            Encontranos
          </p>
          <h2 className="font-headline-md text-3xl md:text-4xl text-on-background">
            Ubicación y Contacto
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Contact info */}
          <div className="flex flex-col gap-8">
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
              <div>
                <p className="font-label-md text-xs uppercase tracking-wider text-on-surface-variant mb-1">Dirección</p>
                <p className="font-body-md text-base text-on-background">
                  Monumento 190<br />
                  Maipú, Región Metropolitana, Chile
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
              <div>
                <p className="font-label-md text-xs uppercase tracking-wider text-on-surface-variant mb-1">Horario</p>
                <p className="font-body-md text-base text-on-background">
                  Lunes a Viernes: 9:00 — 19:00<br />
                  Sábados: 9:00 — 14:00
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MessageCircle className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
              <div>
                <p className="font-label-md text-xs uppercase tracking-wider text-on-surface-variant mb-1">WhatsApp</p>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body-md text-base text-on-background hover:text-secondary transition-colors duration-200"
                >
                  +56 9 7218 2126
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <InstagramIcon className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
              <div>
                <p className="font-label-md text-xs uppercase tracking-wider text-on-surface-variant mb-1">Instagram</p>
                <a
                  href="https://www.instagram.com/mahanystudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body-md text-base text-on-background hover:text-secondary transition-colors duration-200"
                >
                  @mahanystudio
                </a>
              </div>
            </div>

            <a
              href="#agendar"
              className="inline-flex items-center gap-3 font-label-md text-sm uppercase tracking-wider bg-primary text-on-primary py-4 px-8 hover:bg-secondary transition-colors duration-300 w-fit mt-4"
            >
              Agendar Cita →
            </a>
          </div>

          {/* Map embed */}
          <div className="aspect-[4/3] w-full border border-outline-variant overflow-hidden">
            <iframe
              title="Ubicación Mahany Dote Studio"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-70.780%2C-33.531%2C-70.736%2C-33.495&layer=mapnik&marker=-33.513%2C-70.758"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(0.3) contrast(0.95)" }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
