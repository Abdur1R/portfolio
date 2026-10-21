import { motion } from "framer-motion";

const ease: [number, number, number, number] = [0.23, 1, 0.32, 1];

const experiences = [
  {
    period: "Jul 2026 — Present",
    role: "AI Software Engineer",
    company: "Jabil",
    bullets: [
      "Build AI-driven software and data workflows in Python, applying LLM, RAG, and computer-vision techniques to manufacturing quality and defect-detection use cases.",
      "Engineered a computer-vision inspection system with Python, PyTorch, and OpenCV to detect PCB defects (missing components, solder bridges, misplacements), reducing manual inspection time by 38% during pilot deployment.",
      "Built an AI quality-control copilot using LangChain, Pinecone, and Azure OpenAI, integrating RAG over manufacturing SOPs and defect reports to cut engineer information-retrieval time by 45%.",
      "Developed an asynchronous FastAPI inference service and containerized AI workloads with Docker, deploying object-detection models on edge infrastructure and improving defect-detection recall by 14 percentage points.",
      "Test and validate enterprise server and system software in a production environment, documenting results for reliability and traceability.",
      "Collaborate with engineering and operations teams on evaluation, tuning, and integration of AI capabilities into production workflows.",
    ],
    tech: ["Python", "PyTorch", "OpenCV", "LangChain", "Pinecone", "Azure OpenAI", "FastAPI", "Docker"],
  },
  {
    period: "Aug 2025 — Apr 2026",
    role: "AI Engineer",
    company: "Optum (UnitedHealth Group)",
    bullets: [
      "Engineered a multi-agent orchestration workflow using LangGraph and CrewAI to automate prior-authorization document review, cutting manual review time by 42%.",
      "Built a RAG pipeline with LangChain and Pinecone over clinical policy documents to power a natural-language Q&A copilot used daily by care coordinators.",
      "Integrated Azure OpenAI GPT models into agent workflows and validated output quality with RAGAS and prompt-safety testing to meet clinical compliance standards.",
      "Added guardrails and structured-output validation to agent responses, reducing hallucination-related escalations from downstream teams.",
      "Developed FastAPI microservices for agent endpoints and deployed containerized workloads on Azure Kubernetes Service (AKS) using Docker.",
      "Set up CI/CD pipelines in Azure DevOps, enabling automated testing and promotion of agent services across dev, staging, and production.",
      "Implemented LangSmith tracing to debug multi-agent execution paths, cutting the time needed to root-cause production incidents.",
      "Partnered with clinical SMEs to define agent evaluation rubrics, improving response accuracy by 18% over baseline.",
      "Automated recurring intake and document-extraction workflows using n8n and MCP-based tool integrations, reducing manual data-entry effort by 30% for the operations team.",
    ],
    tech: ["LangGraph", "CrewAI", "LangChain", "Pinecone", "Azure OpenAI", "FastAPI", "AKS", "Azure DevOps", "LangSmith"],
  },
  {
    period: "Jun 2022 — Jul 2024",
    role: "Full Stack Developer",
    company: "Phenom",
    bullets: [
      "Architected an event-driven logging and analytics platform with Apache Kafka, Spring Boot, Loki, AWS S3, and REST APIs, processing 1M+ events/day and improving log-processing scalability by 35%.",
      "Built and embedded a LangChain-based GenAI chatbot with prompt engineering and platform-data integration, enabling 100+ users to query analytics in natural language and reducing manual data-lookup time by 45%.",
      "Co-developed a PyTorch user-behavior model and integrated inference into the full-stack application, improving behavioral prediction accuracy by 18%.",
      "Designed and built microservices and REST APIs in Java and Spring Boot for high-traffic enterprise clients including MERCK and Regions Bank.",
      "Supported production deployments with Docker, Jenkins, Argo CD, OpenTelemetry, and Grafana, instrumenting services for observability.",
      "Integrated relational and NoSQL databases (PostgreSQL, MongoDB, Snowflake) and optimized queries for performance.",
      "Collaborated in Agile ceremonies with product and cross-functional teams, contributing to code reviews and technical documentation.",
    ],
    tech: ["Java", "Spring Boot", "Kafka", "React", "LangChain", "PyTorch", "AWS S3", "Argo CD", "Grafana"],
  },
  {
    period: "Feb 2022 — Jun 2022",
    role: "Intern",
    company: "Phenom",
    bullets: [
      "Built reusable React components and an internal test management system using Python/Django, reducing recurring defects by ~50%.",
      "Collaborated in agile sprints, contributing to frontend and backend features across the platform.",
    ],
    tech: ["React", "Python", "Django", "Agile"],
  },
  {
    period: "May 2020 — Dec 2021",
    role: "Software Engineer",
    company: "Integr8 Software Products & Services",
    bullets: [
      "Engineered TestVault, a test reporting and automation platform using Python, Django, pandas, Java, and Spring Boot, reducing manual testing effort by 35% across 5+ projects and improving reporting accuracy.",
      "Developed backend services, REST APIs, and full-stack interfaces in Python, Java, React, and TypeScript, reducing API response latency by 30% through query optimization and backend improvements.",
      "Built a shared React component library and integrated SQL-backed services with Docker and CI/CD, reducing duplicate UI code by 41% and accelerating feature development by 25%.",
      "Designed relational and NoSQL data models and integrated services across a microservices architecture.",
      "Diagnosed and resolved production issues across the stack, improving reliability and maintainability.",
      "Collaborated in Agile teams on design, code reviews, testing, and mentoring of junior developers.",
    ],
    tech: ["Python", "Django", "Java", "Spring Boot", "React", "TypeScript", "Docker", "SQL"],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="py-24">
    <div className="mx-auto w-full max-w-4xl px-6">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-12"
      >
        Experience
      </motion.h2>

      <div className="space-y-0">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease, delay: i * 0.1 }}
            className="group grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4 md:gap-8 py-8 border-b border-border/50"
          >
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest whitespace-nowrap pt-1">
              {exp.period}
            </span>
            <div>
              <h3 className="text-lg font-medium">
                {exp.role} — <span className="text-muted-foreground">{exp.company}</span>
              </h3>
              <ul className="mt-3 space-y-2">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="text-sm text-muted-foreground leading-relaxed">
                    {b}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 text-[10px] font-mono bg-secondary rounded-md text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
