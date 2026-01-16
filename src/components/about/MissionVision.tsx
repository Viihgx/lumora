import { motion } from "framer-motion";
import { Compass, Eye, Heart } from "lucide-react";
import { ComponentType } from "react";

interface MissionItem {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const items: MissionItem[] = [
  {
    icon: Compass,
    title: "Nossa missão",
    description:
      "Ajudar negócios a ganharem clareza, estrutura e presença, conectando estratégia e execução para gerar crescimento real.",
  },
  {
    icon: Eye,
    title: "Nossa visão",
    description:
      "Ser referência em transformar marcas e operações em experiências confiáveis, desejáveis e prontas para escalar.",
  },
  {
    icon: Heart,
    title: "Nossos valores",
    description:
      "Clareza acima de ruído, estética com propósito, execução responsável, parceria de verdade e melhoria contínua.",
  },
];

export default function MissionVision() {
  return (
    <section className="py-24 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-orange-100 text-orange-600 mb-4">
            Quem somos
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Direção clara. Execução forte.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-6">
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
