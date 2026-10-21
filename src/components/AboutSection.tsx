import { motion } from "framer-motion";

const ease: [number, number, number, number] = [0.23, 1, 0.32, 1];

const highlights = [
  { metric: "5+", label: "Years Experience" },
  { metric: "1M+", label: "Events / Day Processed" },
  { metric: "300+", label: "NPM Weekly Downloads" },
  { metric: "3.92", label: "GPA (Masters)" },
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
          Hi, I'm <span className="text-foreground font-medium">Abdur Rahman Shaik</span>, an AI engineer and full stack
          developer with 5+ years of experience building, deploying, and supporting production applications, APIs, and
          AI systems. I graduated with a{" "}
          <span className="text-foreground font-medium">Master of Engineering in Computer Science</span> from the University
          of Cincinnati (GPA 3.92).
        </p>

        <p className="text-base text-muted-foreground leading-relaxed">
          I specialize in{" "}
          <span className="text-primary">LLM and agentic applications, RAG pipelines, and multi-agent orchestration</span>,
          backed by strong backend engineering in{" "}
          <span className="text-primary">Python, Java, Spring Boot, FastAPI</span> and frontends in{" "}
          <span className="text-primary">React and TypeScript</span>, shipped end to end with Docker, Kubernetes, and CI/CD
          on Azure and AWS.
        </p>

        <p className="text-base text-muted-foreground leading-relaxed">
          Today I'm an <span className="text-foreground font-medium">AI Software Engineer at Jabil</span>, applying computer
          vision and RAG to manufacturing quality. Before that I built agentic clinical automation at{" "}
          <span className="text-foreground font-medium">Optum</span>, and at{" "}
          <span className="text-foreground font-medium">Phenom</span> I architected a Kafka-based analytics platform
          processing 1M+ events a day for enterprise clients like MERCK and Regions Bank.
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
