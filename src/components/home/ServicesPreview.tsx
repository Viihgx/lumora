import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Monitor, Bus, Building2, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/SectionHeading";
import { ComponentType } from "react";

interface Service {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
  image: string;
}

const services: Service[] = [
  {
    icon: Building2,
    title: "Estratégia & Direcionamento",
    description: "Clareza de metas, prioridade e plano de ação.",
    image: "https://images.unsplash.com/photo-1568702846914-96b305d2uj38?w=600&q=80"
  },
  {
    icon: Monitor,
    title: "Identidade & Posicionamento",
    description: "Marca forte, mensagem que conecta.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80"
  },
  {
    icon: Bus,
    title: "Estruturação de Processos",
    description: "Organização do dia a dia pra não virar caos”.",
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=600&q=80"
  },
  {
    icon: MapPin,
    title: "Otimização & Performance",
    description: "Melhorias contínuas com foco em resultado.",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600&q=80"
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          badge="Como ajudamos"
          title="Direção certa em cada etapa"
          description="Estratégia, posicionamento e soluções que transformam ideias em crescimento sustentável."
        />

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-slate-50 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500"
              >
                <div className="p-8 md:p-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-orange-500 flex items-center justify-center">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <ArrowRight className="w-6 h-6 text-slate-300 group-hover:text-orange-500 group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
                </div>
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link to="/services">
            <Button size="lg" variant="outline" className="rounded-full px-8 h-12 border-slate-300 hover:bg-slate-900 hover:text-white hover:border-slate-900">
              Ver todas as soluções
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}