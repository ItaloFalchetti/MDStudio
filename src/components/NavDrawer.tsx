import { X } from "lucide-react";

const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Galería", href: "#galeria" },
  { label: "Bioseguridad", href: "#bioseguridad" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Agendar Cita", href: "#agendar" },
  { label: "Contacto", href: "#contacto" },
];

interface NavDrawerProps {
  open: boolean;
  onClose: () => void;
}

export function NavDrawer({ open, onClose }: NavDrawerProps) {
  const handleLinkClick = () => onClose();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-on-background/40 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Drawer panel */}
      <div
        className={`fixed top-0 left-0 h-full w-72 z-50 bg-surface flex flex-col py-8 px-10 transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={onClose}
          className="self-end text-on-surface-variant hover:text-on-background transition-colors duration-200 mb-12"
          aria-label="Cerrar menú"
        >
          <X className="w-5 h-5" />
        </button>

        <nav className="flex flex-col gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="font-label-md text-xs uppercase tracking-widest text-on-surface-variant hover:text-on-background transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="mt-auto">
          <div className="w-8 h-[1px] bg-outline-variant mb-6" />
          <span className="font-display-lg text-2xl tracking-widest text-on-background">MAHANY DOTE</span>
        </div>
      </div>
    </>
  );
}
