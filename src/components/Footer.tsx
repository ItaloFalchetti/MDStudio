import logoMD from "../assets/images/Logo MD Studio.png";

const WA_NUMBER = "56972182126";

const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Galería", href: "#galeria" },
  { label: "Bioseguridad", href: "#bioseguridad" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Contacto", href: "#contacto" },
];

export function Footer() {
  return (
    <footer className="bg-surface-container-high w-full py-section-gap px-margin-mobile md:px-margin-desktop border-t border-outline-variant/30">
      <div className="max-w-container-max mx-auto flex flex-col md:flex-row justify-between gap-12 items-start">
        <div className="flex flex-col gap-4">
          <img
            src={logoMD}
            alt="MD Studio"
            className="w-48 md:w-56"
            style={{ mixBlendMode: "multiply" }}
          />
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/mahanystudio"
              target="_blank"
              rel="noopener noreferrer"
              className="font-label-sm text-xs uppercase tracking-wider text-on-surface-variant hover:text-secondary transition-colors duration-200"
            >
              Instagram
            </a>
            <span className="text-outline-variant">·</span>
            <a
              href={`https://wa.me/${WA_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-label-sm text-xs uppercase tracking-wider text-on-surface-variant hover:text-secondary transition-colors duration-200"
            >
              WhatsApp
            </a>
          </div>
          <span className="font-body-md text-sm text-on-surface-variant">
            © 2026 MAHANY DOTE STUDIO. TODOS LOS DERECHOS RESERVADOS.
          </span>
        </div>

        <nav className="flex flex-col md:flex-row gap-6 md:mt-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body-md text-sm text-on-background hover:text-secondary transition-colors duration-300 hover:underline decoration-secondary underline-offset-4"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
