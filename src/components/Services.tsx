import { Flower, Eye, ArrowRight } from "lucide-react";

const services = [
  {
    icon: <Flower className="w-6 h-6" />,
    title: "Manicura Integral",
    description: "Softgel, Kapping y Esmaltado Permanente. Técnicas de larga duración para uñas elegantes y resistentes.",
    waText: "Hola!%20Me%20interesa%20la%20Manicura%20Integral.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAj0MbxjZOQsWIl62hj4mdajNneExYnlQgArzlrhuxi0qI2GVsTC9-igQoyXlRNg1MB1yk11bKIxGEjFFl4eYRhpE044XaFqGF_-EldFBLHk1RbZAjV2KV0_cjs24vVKPS3hqBk2RM2ZilsR2vnrkLJE3JiQGEufk0jsEtKCWLH75XxiAizbuowMQ_zfmdQX9tAPpdAnSb52eS0T23MrAzCCxn7q9bmk44xUXG__q8yxEoTY2ImkR1B63HjG-YHmUd2NP0Zx91DYfs",
    imageAlt: "Luxury manicure close-up",
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: "Lifting de Pestañas",
    description: "Realza tu mirada de forma natural y sofisticada. Resultado que dura semanas sin necesidad de maquillaje.",
    waText: "Hola!%20Me%20interesa%20el%20Lifting%20de%20Pesta%C3%B1as.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTCuXovvryDzfiR75jLHKQTm9Dc5ZZfRg3X38mvaciWWd5Ty0ICEAAI5d12o2ninjLdJXuEtvO0q4Wu_HB4sOEwugfYxrO5m2sG75SQNuSuRKw_nc7JdFIgKexYbFqXOLfM78UsgTD0AoqOjIhsPnQHBCh_Gauob5Z71BlLraNQThjrk0ADeNrahlZINUA8AGL5GD7iErQ4k-JyRrZpWgPwQQDPP2AqjnuKiWm5gbeY0912-Dt20g1-Qkvc3IjwMgFFyJHZfs32-0",
    imageAlt: "Professional lash lifting",
  },
];

export function Services() {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface" id="servicios">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline-md text-3xl md:text-4xl text-on-background mb-4">Servicios Exclusivos</h2>
          <div className="w-12 h-[1px] bg-primary mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {services.map((s) => (
            <div
              key={s.title}
              className="glass-card rounded-xl overflow-hidden hover:-translate-y-2 transition-transform duration-500 flex flex-col group bg-surface-container"
            >
              <div className="h-64 relative overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  alt={s.imageAlt}
                  src={s.image}
                />
                <div className="absolute inset-0 bg-background/10" />
              </div>
              <div className="p-8 flex flex-col justify-between flex-grow">
                <div>
                  <div className="w-12 h-12 border border-outline/50 rounded-full flex items-center justify-center mb-6 text-primary">
                    {s.icon}
                  </div>
                  <h3 className="font-headline-sm text-2xl text-on-background mb-4">{s.title}</h3>
                  <p className="font-body-md text-base text-on-surface-variant mb-6">{s.description}</p>
                </div>
                <a
                  href="#agendar"
                  className="font-label-md text-sm text-primary uppercase tracking-wider inline-flex items-center gap-2 group-hover:gap-4 transition-all duration-300"
                >
                  Agendar este servicio <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
