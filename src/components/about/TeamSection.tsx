import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const team: TeamMember[] = [
  {
    name: "Laura Mendes",
    role: "Fundadora & Estratégia",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
  },
  {
    name: "Rafael Costa",
    role: "Design & Identidade Visual",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "Camila Rocha",
    role: "Operações & Crescimento",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  },
  {
    name: "Daniel Azevedo",
    role: "Tecnologia & Execução",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
];

export default function TeamSection() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          badge="Nosso time"
          title="Pessoas que transformam estratégia em direção"
          description="A Lumora é formada por profissionais que unem visão estratégica, estética e execução responsável para ajudar negócios a crescerem com clareza."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group text-center"
            >
              <div className="relative mb-6 rounded-3xl overflow-hidden aspect-[3/4]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                      <Linkedin className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                      <Twitter className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-1">
                {member.name}
              </h3>
              <p className="text-slate-500">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
