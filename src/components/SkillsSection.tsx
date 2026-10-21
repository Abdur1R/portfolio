import { motion } from "framer-motion";

const ease: [number, number, number, number] = [0.23, 1, 0.32, 1];

const skillGroups = [
  {
    label: "AI / LLMs",
    items: ["LangGraph", "CrewAI", "LangChain", "RAG", "Pinecone", "Prompt Engineering", "Azure OpenAI", "RAGAS", "LangSmith", "Anthropic / OpenAI / Groq APIs"],
  },
  {
    label: "ML / Computer Vision",
    items: ["PyTorch", "TensorFlow / Keras", "scikit-learn", "OpenCV", "pandas", "NumPy"],
  },
  {
    label: "Languages",
    items: ["Python", "Java", "TypeScript", "JavaScript", "SQL", "C", "HTML/CSS"],
  },
  {
    label: "Backend",
    items: ["FastAPI", "Spring Boot", "Django", "Node.js", "REST APIs", "Microservices", "Kafka"],
  },
  {
    label: "Frontend",
    items: ["React.js", "React Native", "Angular", "Module Federation", "Webpack", "Bootstrap"],
  },
  {
    label: "Cloud / DevOps",
    items: ["Azure (AKS, DevOps, Blob)", "AWS (S3, Lambda)", "GCP", "Docker", "Kubernetes", "Jenkins", "Argo CD", "GitHub Actions"],
  },
  {
    label: "Data",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Snowflake"],
  },
  {
    label: "Observability",
    items: ["OpenTelemetry", "Grafana", "Loki", "LangSmith"],
  },
];

const SkillsSection = () => (
  <section id="skills" className="py-24">
    <div className="mx-auto w-full max-w-4xl px-6">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-12"
      >
        Tech Stack
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease, delay: i * 0.05 }}
            className="p-5 rounded-lg border border-border bg-card"
          >
            <h3 className="font-mono text-[10px] uppercase tracking-widest text-primary mb-3">
              {group.label}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="px-2 py-1 text-xs font-mono bg-secondary rounded-md text-muted-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
