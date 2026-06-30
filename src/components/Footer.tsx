export function Footer() {
  return (
    <footer className="bg-surface-container-high w-full py-section-gap px-margin-mobile md:px-margin-desktop border-t border-outline-variant/30">
      <div className="max-w-container-max mx-auto flex flex-col md:flex-row justify-between gap-gutter items-start md:items-center">
        <div className="flex flex-col gap-4">
          <span className="font-display-lg-mobile md:font-display-lg text-4xl md:text-5xl text-on-background">MAHANY DOTE</span>
          <span className="font-body-md text-base text-on-surface-variant">© 2024 MAHANY DOTE STUDIO. ALL RIGHTS RESERVED.</span>
        </div>
        <nav className="flex flex-col md:flex-row gap-6 mt-8 md:mt-0">
          <a className="font-body-md text-base text-on-background hover:text-primary transition-colors duration-300 hover:underline decoration-primary underline-offset-4" href="#">Services</a>
          <a className="font-body-md text-base text-on-background hover:text-primary transition-colors duration-300 hover:underline decoration-primary underline-offset-4" href="#">Portfolio</a>
          <a className="font-body-md text-base text-on-background hover:text-primary transition-colors duration-300 hover:underline decoration-primary underline-offset-4" href="#">Biosecurity</a>
          <a className="font-body-md text-base text-on-background hover:text-primary transition-colors duration-300 hover:underline decoration-primary underline-offset-4" href="#">Location</a>
          <a className="font-body-md text-base text-on-background hover:text-primary transition-colors duration-300 hover:underline decoration-primary underline-offset-4" href="#">Instagram</a>
        </nav>
      </div>
    </footer>
  );
}
