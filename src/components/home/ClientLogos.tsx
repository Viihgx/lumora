import { motion } from "framer-motion";

const clients = [
  "E-commerce & Lojas",
  "Serviços Locais",
  "Saúde & Bem-estar",
  "Educação",
  "Imobiliárias",
  "Infoprodutos",
  "Restaurantes",
  "Profissionais Autônomos",
];

export default function ClientLogos() {
  return (
    <section className="py-16 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm font-medium text-slate-500 uppercase tracking-wider mb-10"
        >
          Feito para negócios que querem crescer
        </motion.p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {clients.map((client, index) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="text-2xl font-bold text-slate-300 hover:text-slate-500 transition-colors cursor-default"
            >
              {client}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
