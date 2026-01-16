import { motion } from "framer-motion";

export default function OurStory() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-orange-100 text-orange-600 mb-6">
              Nossa história
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-6">
              A Lumora nasceu da vontade de dar direção ao que já tem potencial
            </h2>

            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Nem todo negócio precisa de “mais ideias”. Muitas vezes, precisa
                de clareza: um posicionamento forte, uma comunicação consistente
                e um caminho de execução.
              </p>
              <p>
                A Lumora surge exatamente aí: para organizar o que você já faz
                bem, dar forma ao seu valor e construir uma presença que passa
                confiança e gera crescimento.
              </p>
              <p>
                Nosso foco é simples: unir estratégia e estética com uma
                execução responsável, do planejamento ao resultado.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Equipe colaborando"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-orange-500 rounded-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
