import { motion } from "framer-motion";

const ease: [number, number, number, number] = [0.23, 1, 0.32, 1];

const education = [
  {
    period: "Aug 2024 — Apr 2026",
    degree: "M.Eng in Computer Science",
    school: "University of Cincinnati",
    gpa: "3.917 / 4.00",
  },
  {
    period: "Aug 2018 — Jun 2022",
    degree: "B.Tech in Electronics & Communication Engineering",
    school: "Sreenidhi Institute of Science and Technology",
    gpa: "3.19 / 4.00",
  },
];

const EducationSection = () => (
  <section id="education" className="py-24">
    <div className="mx-auto w-full max-w-4xl px-6">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-12"
      >
        Education
      </motion.h2>

      <div className="space-y-0">
        {education.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease, delay: i * 0.1 }}
            className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4 md:gap-8 py-8 border-b border-border/50"
          >
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest whitespace-nowrap pt-1">
              {edu.period}
            </span>
            <div>
              <h3 className="text-lg font-medium">{edu.degree}</h3>
              <p className="text-sm text-muted-foreground mt-1">{edu.school}</p>
              <p className="font-mono text-xs text-primary mt-2">GPA: {edu.gpa}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;
