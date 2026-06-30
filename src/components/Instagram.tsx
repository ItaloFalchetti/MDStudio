import { Heart } from "lucide-react";

export function Instagram() {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-low" id="instagram">
      <div className="max-w-container-max mx-auto text-center">
        <h2 className="font-headline-md text-3xl md:text-4xl text-on-background mb-4">Síguenos en Instagram</h2>
        <div className="w-12 h-[1px] bg-primary mx-auto mb-6"></div>
        <p className="font-body-md text-base text-on-surface-variant mb-12">
          Inspírate con nuestros últimos trabajos y únete a nuestra comunidad.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mb-12">
          <div className="aspect-square relative group overflow-hidden bg-surface rounded-lg">
            <img
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              alt="Instagram post"
              src="https://lh3.googleusercontent.com/aida/AP1WRLtp_cg8F4pXRuoIl0YBSF8mDboAE5sPOrSe4royO2VcG5Y7gWjfg94XGV0N9nFN4c2v-dZnKEvf9dE1-z2ESaRwWQXcGhYfz1SHV-2Nx7VakWA5NnFP0kShPKE1qRO6GpOKtSc7BHGO7UDLpT9k1t-nafWdnxEAsO8UJBw8bxRfNiCtQ-iDkmnUN2Iy7GZq6d-CHzTx1kaSTuF-spP47yxyY1KrzXeTQ7z84JY5dmMvaU0kFGkoPtbM0Q"
            />
            <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-on-primary">
              <Heart className="w-8 h-8" />
            </div>
          </div>
          <div className="aspect-square relative group overflow-hidden bg-surface rounded-lg">
            <img
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              alt="Instagram post"
              src="https://lh3.googleusercontent.com/aida/AP1WRLuVU9LocAH7RCHRHuJuL4fNB_g-Gx4FrD9ud4lEQlb3g66AeoB4NlqWXjcFKBAm7ZdFomrnou9CwqeSRpRCkJSEomxCzCWJl1p_AW-Bf9P895bpnzBxnNvKYm00UDNtq-EzzWXQr_63IqPBZsDwRh1HQ71SNXw2y6Iy6O10kLnSkXxCjHVhghsHQu33jRgH6p0ZSNM5OxOu-F2W9lVEQvkUHsASGKM806GKT-olyrN3U6vQIVdCVZ07POM"
            />
            <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-on-primary">
              <Heart className="w-8 h-8" />
            </div>
          </div>
          <div className="aspect-square relative group overflow-hidden bg-surface rounded-lg">
            <img
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              alt="Instagram post"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuALdiNJ50sx4Gw_tPY7sqSyFJRtH8Rf9BQmduDA9rVQ8reKJKMF8vIp04TJBD1uzgZN85SuUC1b4AHBO1l5q0ZWKtvM4RWllf5JbsSpvWI1CQp07o7T9u3G_xYfcGn64hd03YVKIprQKOqg7TQhX-3bNkKHM_VdhlainTQzJr_Z5jAEzljMJJFRUyAjkhKENgHSGV08KtoKrG2i7BPjhD_u3t_910KaT6AeJdq40K9PKadlLkSeRj3A4glGo61skKraDwLIQn9qA04"
            />
            <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-on-primary">
              <Heart className="w-8 h-8" />
            </div>
          </div>
          <div className="aspect-square relative group overflow-hidden bg-surface rounded-lg hidden md:block">
            <img
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              alt="Instagram post"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCB1EfQPuUxsXPRjvsQdNNUklyfz2AJonoHUipeXWYjdmjbBgI_qtxFBHGts0fblQC3ioscxiHhG6q59yGf9Ld2RNWvnwQmRgEVk40zDPa78bL0zGueUG9I7wRsr8E96nk8M6qAp1CY_KA0hnPKla0h6uFfvICvavxx8QpUg_heY4A1T3OY09KyV3NXxJRGXGmh7d64M3c_LSHzevnRl3VoU2FBJMmJXMEBwUyzjbmWNDdVpzI0CcjbAeeRjH0IduvGyzxcGrtZDDg"
            />
            <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-on-primary">
              <Heart className="w-8 h-8" />
            </div>
          </div>
        </div>

        <button className="bg-primary text-on-primary font-label-md text-sm uppercase tracking-wider py-4 px-10 rounded-full hover:bg-on-surface-variant transition-all duration-300 glow-button inline-flex items-center gap-2">
          Seguir en Instagram
        </button>
      </div>
    </section>
  );
}
