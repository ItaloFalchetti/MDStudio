import { ShieldCheck, CheckCircle2, Stethoscope, Award } from "lucide-react";

export function Biosecurity() {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-low" id="bioseguridad">
      <div className="max-w-container-max mx-auto flex flex-col md:flex-row gap-16 items-center">
        <div className="w-full md:w-1/2">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden relative border border-outline-variant/50">
            <img
              className="w-full h-full object-cover object-center"
              alt="A pristine, highly sanitized workstation in a luxury aesthetic clinic."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJXJ6BoUuJkzzQxpBYYM8W8SCRkYkk28op-M5KkTvicq0JKE3P3dpjpuxYgLPy2Y2M47Tov_QqX1iqYKv2SK6RnAaVe8yY0jBwehKnLlG1pblL9-wysdzvexgrmJmAN3L_QH5w7GVHIssA4ZoOnfRlXKImKksyK8L1788EtC9RPz2pRC_s0d5XBF8BpaOPNDGv3A9NdMb2QkM1rKCrV8XXszjDBq-gT8N3OzVmJnq_HUWwy3ZrW0QMGXBYy0OnV30S0au9hXQ8Bvk"
            />
            <div className="absolute inset-0 bg-background/20 mix-blend-overlay"></div>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 text-primary font-label-md text-sm uppercase tracking-widest border border-outline/30 px-4 py-2 rounded-full w-fit">
            <ShieldCheck className="w-4 h-4" /> Exclusividad y Seguridad
          </div>
          <h2 className="font-display-lg-mobile md:font-display-lg text-4xl md:text-5xl text-on-background">
            Tu Seguridad es Nuestra Prioridad
          </h2>
          <p className="font-body-lg text-lg text-on-surface-variant">
            En Mahany Dote Studio, la estética y la salud van de la mano. Implementamos rigurosos protocolos de higiene para garantizar un entorno seguro y de confianza.
          </p>
          <ul className="space-y-6 mt-4">
            <li className="flex items-start gap-4 glass-card p-4 rounded-lg border-outline-variant/50 bg-surface">
              <CheckCircle2 className="text-primary mt-1 w-6 h-6 shrink-0" />
              <span className="font-body-md text-base text-on-background">Estándares de higiene clínica detallados.</span>
            </li>
            <li className="flex items-start gap-4 glass-card p-4 rounded-lg border-outline-variant/50 bg-surface">
              <Stethoscope className="text-primary mt-1 w-6 h-6 shrink-0" />
              <span className="font-body-md text-base text-on-background">Herramientas 100% esterilizadas por autoclave.</span>
            </li>
            <li className="flex items-start gap-4 glass-card p-4 rounded-lg border-outline-variant/50 bg-surface">
              <Award className="text-primary mt-1 w-6 h-6 shrink-0" />
              <span className="font-body-md text-base text-on-background">Productos premium hipoalergénicos.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
