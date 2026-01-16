import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/config/brand";

export default function CTASection() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[2.5rem] overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1920&q=80"
              alt="Team meeting"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/90 to-slate-900/80" />
          </div>

          {/* Content */}
          <div className="relative px-8 py-16 md:px-16 md:py-24 lg:px-24">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                Pronta pra destravar o 
                <span className="text-orange-400"> crescimento do seu negócio?</span>
              </h2>
              <p className="text-lg text-slate-300 mb-10 leading-relaxed">
                A Lumora combina clareza, estratégia e execução pra organizar sua operação, fortalecer sua marca e melhorar seus resultados.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 h-14 text-base font-semibold rounded-full group">
                  Quero uma consultoria
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 h-14 text-base font-semibold rounded-full">
                  Ver soluções
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 text-slate-300">
                <a href={`tel:${BRAND.phone}`} className="flex items-center gap-3 hover:text-orange-400 transition-colors">
                  <Phone className="w-5 h-5" />
                  <span>+55 (85) 99999-9999</span>
                </a>
                <a href={`mailto:${BRAND.email}`} className="flex items-center gap-3 hover:text-orange-400 transition-colors">
                  <Mail className="w-5 h-5" />
                  <span>contato@lumora.com</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}