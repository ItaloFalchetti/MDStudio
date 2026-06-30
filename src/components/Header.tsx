import { useState } from "react";
import { Menu } from "lucide-react";
import { NavDrawer } from "./NavDrawer";

export function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <header className="bg-background/80 fixed top-0 w-full z-40 backdrop-blur-md border-b border-outline-variant/30 flex justify-between items-center px-margin-mobile md:px-margin-desktop h-20">
        <button
          onClick={() => setDrawerOpen(true)}
          className="text-on-background hover:text-primary transition-colors duration-300"
          aria-label="Abrir menú"
        >
          <Menu className="w-6 h-6" />
        </button>

        <span className="md:hidden font-display-lg-mobile text-xl tracking-widest text-on-background">
          MD STUDIO
        </span>
        <span className="hidden md:block font-display-lg text-2xl tracking-widest text-on-background">
          MAHANY DOTE STUDIO
        </span>

        <a
          href="#agendar"
          className="font-label-sm text-xs uppercase tracking-wider border border-primary text-primary px-4 py-2 hover:bg-primary hover:text-on-primary transition-all duration-300"
        >
          Agendar
        </a>
      </header>

      <NavDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
