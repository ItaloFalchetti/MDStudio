import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Biosecurity } from "./components/Biosecurity";
import { Gallery } from "./components/Gallery";
import { Testimonials } from "./components/Testimonials";
import { Booking } from "./components/Booking";
import { Contact } from "./components/Contact";
import { Instagram } from "./components/Instagram";
import { Footer } from "./components/Footer";
import { WhatsAppFAB } from "./components/WhatsAppFAB";

export default function App() {
  return (
    <div className="antialiased min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Biosecurity />
        <Gallery />
        <Testimonials />
        <Booking />
        <Contact />
        <Instagram />
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}
