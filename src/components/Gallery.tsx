import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Lightbox } from "./Lightbox";

const carouselImages = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuALdiNJ50sx4Gw_tPY7sqSyFJRtH8Rf9BQmduDA9rVQ8reKJKMF8vIp04TJBD1uzgZN85SuUC1b4AHBO1l5q0ZWKtvM4RWllf5JbsSpvWI1CQp07o7T9u3G_xYfcGn64hd03YVKIprQKOqg7TQhX-3bNkKHM_VdhlainTQzJr_Z5jAEzljMJJFRUyAjkhKENgHSGV08KtoKrG2i7BPjhD_u3t_910KaT6AeJdq40K9PKadlLkSeRj3A4glGo61skKraDwLIQn9qA04",
    alt: "Uñas softgel elegantes",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAixx2nM3DQ4DAbA804RX9EsDyqlp3c-80hNcB3L3ulwq83TqgZ51_0QXYOEgKSfOPCPey1ph8F_FCoUYUJb6jSHKJEh6kUnNybR3S0MNvlcnfQvNMuUt4bDo6LO5XE8vdf73xhJiQMSwYJgVonOSuKkMxRkEblT8ShnKdONnRkAcugiQiyCbVKAyro53e1YCHtSIuZXjV69CoNZYWTnSTiChdv1-G_ZtdNJlLRqwKltvD2D29kFS2u9VS6V3mDfeMS003lF2rxjk",
    alt: "Herramientas premium de belleza",
  },
];

const gridImages = [
  {
    src: "https://lh3.googleusercontent.com/aida/AP1WRLtp_cg8F4pXRuoIl0YBSF8mDboAE5sPOrSe4royO2VcG5Y7gWjfg94XGV0N9nFN4c2v-dZnKEvf9dE1-z2ESaRwWQXcGhYfz1SHV-2Nx7VakWA5NnFP0kShPKE1qRO6GpOKtSc7BHGO7UDLpT9k1t-nafWdnxEAsO8UJBw8bxRfNiCtQ-iDkmnUN2Iy7GZq6d-CHzTx1kaSTuF-spP47yxyY1KrzXeTQ7z84JY5dmMvaU0kFGkoPtbM0Q",
    alt: "Manicura de lujo",
  },
  {
    src: "https://lh3.googleusercontent.com/aida/AP1WRLuVU9LocAH7RCHRHuJuL4fNB_g-Gx4FrD9ud4lEQlb3g66AeoB4NlqWXjcFKBAm7ZdFomrnou9CwqeSRpRCkJSEomxCzCWJl1p_AW-Bf9P895bpnzBxnNvKYm00UDNtq-EzzWXQr_63IqPBZsDwRh1HQ71SNXw2y6Iy6O10kLnSkXxCjHVhghsHQu33jRgH6p0ZSNM5OxOu-F2W9lVEQvkUHsASGKM806GKT-olyrN3U6vQIVdCVZ07POM",
    alt: "Lifting de pestañas profesional",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCB1EfQPuUxsXPRjvsQdNNUklyfz2AJonoHUipeXWYjdmjbBgI_qtxFBHGts0fblQC3ioscxiHhG6q59yGf9Ld2RNWvnwQmRgEVk40zDPa78bL0zGueUG9I7wRsr8E96nk8M6qAp1CY_KA0hnPKla0h6uFfvICvavxx8QpUg_heY4A1T3OY09KyV3NXxJRGXGmh7d64M3c_LSHzevnRl3VoU2FBJMmJXMEBwUyzjbmWNDdVpzI0CcjbAeeRjH0IduvGyzxcGrtZDDg",
    alt: "Perfil con lifting de pestañas",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUJz4g1nCM9w57DcdDlz6Pd_pdfFZcayyFmml2eraSapLvHMcz9dyUhKY8i4vpp5kZ4q8z9qil0BrVTLy-WnkrSqcgxrGmebv_KqQLcT3XmRJDJQIDHWD6V6Pr2BV6HcvhuoSlL529dhY9fSdq5y6-m3wHDkgpqVuIvhMh1V2aOUtKFneSOpC2skTlvHl7vMoH0P1p-lltwyfVmoFfy75VHDXvY_sFL8rbXZSUyaxlFAPzv5qWygAzosFtt50kdyTm8MQtBxgutGI",
    alt: "Detalle de manos con guantes",
  },
];

const allImages = [...gridImages];

export function Gallery() {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollTo = (index: number) => {
    const next = Math.max(0, Math.min(index, carouselImages.length - 1));
    setCarouselIndex(next);
    if (scrollRef.current) {
      const child = scrollRef.current.children[next] as HTMLElement;
      child?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  };

  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-background" id="galeria">
      <div className="max-w-container-max mx-auto">
        <div className="flex flex-col mb-12">
          <h2 className="font-headline-md text-3xl md:text-4xl text-on-background mb-2">Nuestros Trabajos</h2>
          <div className="w-12 h-[1px] bg-primary mb-4" />
          <p className="font-body-md text-base text-on-surface-variant">El arte de la precisión y el detalle.</p>
        </div>

        {/* Carousel */}
        <div className="relative mb-4">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-4 md:gap-gutter pb-4 snap-x snap-mandatory scrollbar-hide"
          >
            {carouselImages.map((img, i) => (
              <div
                key={i}
                className="w-[85%] md:w-[60%] flex-shrink-0 snap-center rounded-xl overflow-hidden aspect-[16/9] border border-outline-variant/30"
              >
                <img className="w-full h-full object-cover" src={img.src} alt={img.alt} />
              </div>
            ))}
          </div>

          {/* Arrow controls */}
          <button
            onClick={() => scrollTo(carouselIndex - 1)}
            disabled={carouselIndex === 0}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/90 border border-outline-variant flex items-center justify-center hover:bg-surface-container transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scrollTo(carouselIndex + 1)}
            disabled={carouselIndex === carouselImages.length - 1}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/90 border border-outline-variant flex items-center justify-center hover:bg-surface-container transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mb-12">
          {carouselImages.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`w-1.5 h-1.5 rounded-full transition-colors duration-200 ${
                i === carouselIndex ? "bg-primary" : "bg-surface-container-highest"
              }`}
              aria-label={`Ir a imagen ${i + 1}`}
            />
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-4 md:gap-gutter mb-12">
          {gridImages.map((img, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden relative group aspect-square border border-outline-variant/30 cursor-pointer"
              onClick={() => setLightboxIndex(i)}
            >
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src={img.src}
                alt={img.alt}
              />
              <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <ChevronRight className="text-primary w-8 h-8 rotate-45" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            className="inline-flex items-center gap-2 font-label-md text-sm text-primary uppercase tracking-wider hover:text-on-surface-variant transition-colors border border-primary rounded-full px-8 py-3 hover:bg-primary/5"
            href="#"
          >
            Ver todos <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={allImages}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((i) => Math.max(0, (i ?? 0) - 1))}
          onNext={() => setLightboxIndex((i) => Math.min(allImages.length - 1, (i ?? 0) + 1))}
        />
      )}
    </section>
  );
}
