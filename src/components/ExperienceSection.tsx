import { motion } from "framer-motion";

const ease: [number, number, number, number] = [0.23, 1, 0.32, 1];

const experiences = [
  {
    period: "Jun 2022 — Jul 2024",
    role: "Full Stack Developer",
    company: "Phenom",
    bullets: [
      "Built a distributed data streaming platform using Kafka, Loki & AWS S3 for real-time event ingestion — adopted by MERCK and Regions Bank as a $25K subscription feature.",
      "Implemented backend APIs with Java/Spring Boot and React UI for querying and visualizing log data by time range, improving developer productivity.",
    ],
    tech: ["React", "Java", "Spring Boot", "Kafka", "AWS S3", "Loki"],
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
      "Developed and maintained software applications and workflow integrations over 1.5+ years using Python, Java, JavaScript, SQL, HTML, and REST-based web services.",
      "Supported backend logic, database-driven functionality, troubleshooting, testing, and documentation for internal andclient-facing systems.",
      "Workedwithteammatesandstakeholders to gather requirements, resolve issues, and deliver maintainable enhancements across multiple application modules.",
      "Contributed to secure, structured application delivery through validation, debugging, and iterative release support."
    ],
    tech: ["React", "Python", "Django", "Agile"],
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
