/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Biosecurity } from "./components/Biosecurity";
import { Gallery } from "./components/Gallery";
import { Instagram } from "./components/Instagram";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="antialiased min-h-screen flex flex-col pt-20">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Biosecurity />
        <Gallery />
        <Instagram />
      </main>
      <Footer />
    </div>
  );
}
