import { Menu, User } from "lucide-react";

export function Header() {
  return (
    <header className="bg-background/80 fixed top-0 w-full z-50 backdrop-blur-md border-b border-outline-variant/30 flex justify-between items-center px-margin-mobile md:px-margin-desktop h-20">
      <button className="text-on-background hover:text-primary transition-colors duration-300">
        <Menu className="w-6 h-6" />
      </button>
      <span className="font-display-lg-mobile md:font-display-lg text-2xl md:text-3xl tracking-widest text-on-background">MAHANY DOTE</span>
      <button className="text-on-background hover:text-primary transition-colors duration-300">
        <User className="w-6 h-6" />
      </button>
    </header>
  );
}
