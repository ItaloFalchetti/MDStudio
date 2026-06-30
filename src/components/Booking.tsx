import { useEffect } from "react";

const CALENDLY_URL = "https://calendly.com/italo-falchetti";

export function Booking() {
  useEffect(() => {
    if (document.querySelector('script[src*="calendly"]')) return;

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface" id="agendar">
      <div className="max-w-container-max mx-auto">
        <div className="mb-12 text-center">
          <p className="font-label-sm text-xs uppercase tracking-widest text-secondary mb-3">
            Reservá tu lugar
          </p>
          <h2 className="font-headline-md text-3xl md:text-4xl text-on-background mb-4">
            Agendar Cita
          </h2>
          <div className="w-12 h-[1px] bg-primary mx-auto" />
        </div>

        <div
          className="calendly-inline-widget w-full"
          data-url={`${CALENDLY_URL}?hide_gdpr_banner=1&primary_color=1a1a1a`}
          style={{ minWidth: "320px", height: "700px" }}
        />
      </div>
    </section>
  );
}
