import { motion } from "framer-motion";
import {
  Monitor,
  Lightbulb,
  Target,
  Smartphone,
  ArrowRight,
  Search,
  BarChart3,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ComponentType } from "react";

interface Service {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
  features: string[];
  image: string;
}

const services: Service[] = [
  {
    icon: Lightbulb,
    title: "Identidade & Branding",
    description:
      "Construímos uma marca coerente e memorável, com direção visual e linguagem que combinam com seu posicionamento.",
    features: [
      "Logo e variações",
      "Paleta e tipografia",
      "Guia de uso",
      "Aplicações e padrões",
    ],
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
  },
  {
    icon: Monitor,
    title: "Landing Pages",
    description:
      "Páginas focadas em conversão, ideais para campanhas, lançamentos e validação de produtos ou serviços.",
    features: [
      "Copy e estrutura",
      "Seções estratégicas",
      "CTA claro",
      "Responsivo",
    ],
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
  },
  {
    icon: Smartphone,
    title: "Sites & Portfólios",
    description:
      "Sites modernos e organizados para apresentar sua marca com credibilidade e entregar uma experiência premium.",
    features: [
      "Design sob medida",
      "Layout consistente",
      "SEO básico",
      "Performance",
    ],
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80",
  },
  {
    icon: Target,
    title: "UI/UX & Design System",
    description:
      "Criamos interfaces claras e escaláveis, com componentes reutilizáveis e padrões que aceleram evolução.",
    features: [
      "Componentes",
      "Tokens visuais",
      "Estados e variações",
      "Documentação",
    ],
    image:
      "https://images.unsplash.com/photo-1753715613388-7e03410b1dce?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    icon: Search,
    title: "Conteúdo & Estrutura",
    description:
      "Organização da mensagem: o que dizer, onde dizer e como guiar o usuário até a ação.",
    features: [
      "Hierarquia",
      "Seções essenciais",
      "Texto objetivo",
      "Fluxo de leitura",
    ],
    image:
      "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    icon: BarChart3,
    title: "Otimização & SEO",
    description:
      "Ajustes de performance, acessibilidade e SEO básico para deixar seu projeto mais sólido e confiável.",
    features: ["Boas práticas", "Meta tags", "Performance", "Acessibilidade"],
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
  },
];

export default function ServicesList() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="space-y-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-orange-500 flex items-center justify-center">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-lg text-slate-600 leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-slate-700"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="bg-slate-900 hover:bg-slate-800 rounded-full px-6 text-white">
                    Quero um orçamento
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div
                  className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}
                >
                  <div className="rounded-3xl overflow-hidden aspect-[4/3]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div
                    className={`absolute -z-10 w-full h-full bg-orange-100 rounded-3xl ${
                      index % 2 === 0
                        ? "-bottom-4 -right-4"
                        : "-bottom-4 -left-4"
                    }`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
