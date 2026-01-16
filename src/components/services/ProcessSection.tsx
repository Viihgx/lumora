import { motion } from "framer-motion";
import {
  MessageSquare,
  Search,
  Palette,
  Rocket,
  BarChart3,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { ComponentType } from "react";

interface ProcessStep {
  icon: ComponentType<{ className?: string }>;
  step: string;
  title: string;
  description: string;
}

const steps: ProcessStep[] = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Briefing & Direção",
    description:
      "Entendemos seu momento, objetivos e público. Saímos com um norte claro do que precisa ser construído.",
  },
  {
    icon: Search,
    step: "02",
    title: "Pesquisa & Estrutura",
    description:
      "Mapeamos referências, concorrentes e definimos a arquitetura: conteúdo, páginas e mensagens-chave.",
  },
  {
    icon: Palette,
    step: "03",
    title: "Design & Identidade",
    description:
      "Criamos a estética e o sistema visual: tipografia, cores, componentes e padrões consistentes.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Construção & Entrega",
    description:
      "Transformamos o design em uma experiência real, responsiva e pronta para apresentação ou publicação.",
  },
  {
    icon: BarChart3,
    step: "05",
    title: "Ajustes & Evolução",
    description:
      "Refinamos detalhes, performance e clareza. O objetivo é entregar algo que funcione e pareça premium.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 md:py-32 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          badge="Como trabalhamos"
          title="Um processo claro, do zero ao pronto"
          description="Etapas objetivas para transformar ideia em presença digital com consistência e acabamento."
          light
        />

        <div className="relative mt-12">
          <div
            aria-hidden="true"
            className="
              hidden lg:block
              absolute left-0 right-0
              top-10
              h-px
              bg-gradient-to-r from-orange-500/10 via-orange-500/60 to-orange-500/10
            "
          />

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10">
            {steps.map((step, index) => {
              const IconComponent = step.icon;

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="relative text-center"
                >
                  <div
                    aria-hidden="true"
                    className="
                hidden lg:block
                absolute left-1/2 -translate-x-1/2
                top-10
                w-2.5 h-2.5 rounded-full
                bg-orange-500
                shadow-[0_0_0_6px_rgba(249,115,22,0.12)]
              "
                  />

                  <div className="relative z-10 w-20 h-20 mx-auto rounded-2xl bg-slate-900/70 backdrop-blur border border-slate-800 flex items-center justify-center mb-6 hover:border-orange-500/60 transition-colors">
                    <IconComponent className="w-8 h-8 text-orange-500" />

                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">
                      {step.step}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
