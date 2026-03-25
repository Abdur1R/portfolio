import { motion } from "framer-motion";

const ease: [number, number, number, number] = [0.23, 1, 0.32, 1];

const highlights = [
  { metric: "2+", label: "Years Experience" },
  { metric: "20+", label: "Figma → Code Projects" },
  { metric: "300+", label: "NPM Weekly Downloads" },
  { metric: "3.9", label: "GPA (Masters)" },
];

const AboutSection = () => (
  <section id="about" className="py-24">
    <div className="mx-auto w-full max-w-4xl px-6">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-12"
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease }}
        className="space-y-6"
      >
        <p className="text-base text-muted-foreground leading-relaxed">
          Hi, I'm <span className="text-foreground font-medium">Abdur Rahman Shaik</span>, a passionate full-stack developer
          with over 2 years of experience crafting seamless web experiences. I'm currently pursuing my{" "}
          <span className="text-foreground font-medium">Master's in Computer Science</span> at the University of Cincinnati.
        </p>

        <p className="text-base text-muted-foreground leading-relaxed">
          I'm proficient in{" "}
          <span className="text-primary">React.js, TypeScript, Java, Spring Boot, Python, Django, FastAPI</span>, and modern
          cloud infrastructure. I love building products that sit at the intersection of great design and robust engineering.
        </p>

        <p className="text-base text-muted-foreground leading-relaxed">
          At <span className="text-foreground font-medium">Phenom</span>, I designed a Kafka-based streaming platform adopted
          by enterprise clients like MERCK and Regions Bank, converted 20+ Figma designs into production apps, and built
          internal tools that cut QA effort by 42%.
        </p>
      </motion.div>

      {/* Highlights grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
        {highlights.map((h, i) => (
          <motion.div
            key={h.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease, delay: i * 0.08 }}
            className="p-5 rounded-lg border border-border bg-card text-center"
          >
            <span className="text-2xl font-semibold text-primary">{h.metric}</span>
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-2">
              {h.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
