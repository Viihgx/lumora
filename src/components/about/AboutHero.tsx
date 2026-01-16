import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-slate-950 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
          alt="Ambiente de trabalho"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 to-slate-950" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-6">
            Sobre a Lumora
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6">
            Clareza e estratégia para
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              {" "}
              negócios crescerem com consistência
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
            A Lumora nasce para transformar ideias em direção: organizamos sua
            comunicação, sua presença e suas decisões para você vender melhor,
            operar com mais segurança e evoluir com foco.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
