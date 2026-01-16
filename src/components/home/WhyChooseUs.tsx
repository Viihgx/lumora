import { motion } from "framer-motion";
import { Target, TrendingUp, Users, Award, Clock, Shield } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { ComponentType } from "react";

interface Feature {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Target,
    title: "Diagnóstico com clareza",
    description: "Entendemos o cenário atual e identificamos o que está travando seu crescimento."
  },
  {
    icon: TrendingUp,
    title: "Plano simples e executável",
    description: "Estratégia sem enrolação: passo a passo prático, com prioridades bem definidas."
  },
  {
    icon: Users,
    title: "Acompanhamento de verdade",
    description: "Você não fica sozinho: suporte e orientação para tirar as decisões do papel."
  },
  {
    icon: Award,
    title: "Posicionamento consistente",
    description: "Ajustamos mensagem, oferta e presença para você ser percebido com mais força."
  },
  {
    icon: Clock,
    title: "Ritmo e consistência",
    description: "Criamos uma rotina de execução que mantém o progresso acontecendo toda semana."
  },
  {
    icon: Shield,
    title: "Processo que sustenta",
    description: "Organização e estrutura para crescer sem depender de improviso."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 bg-slate-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          badge="Por que a Lumora"
          title="Clareza, direção e execução"
          description="A gente organiza o que está confuso, define o que vem primeiro e transforma estratégia em rotina com consistência."
          light
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
                  <IconComponent className="w-6 h-6 text-orange-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}