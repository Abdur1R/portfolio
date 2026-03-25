import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const ease: [number, number, number, number] = [0.23, 1, 0.32, 1];

const projects = [
  {
    title: "AI-Powered Code Review System",
    description:
      "FastAPI backend integrating multiple LLM providers to auto-review pull requests. GitHub App webhooks + React UI for seamless repo onboarding and real-time inline AI feedback.",
    tech: ["FastAPI", "React", "LLM APIs", "GitHub Apps", "Webhooks"],
    link: "https://abdur1r.github.io/code-companion",
  },
  {
    title: "Open Source NPM Package — Comments Section",
    description:
      "Published React component with 300+ weekly downloads enabling plug-and-play comment functionality. Modular architecture with TypeScript and Webpack for cross-project compatibility.",
    tech: ["React", "TypeScript", "Webpack", "NPM"],
    link: "https://www.npmjs.com/package/comments-section",
  },
  {
    title: "Software Load Balancer",
    description:
      "Java-based load balancer using socket programming with round-robin routing, real-time health checks, and fault detection for high availability.",
    tech: ["Java", "Socket Programming", "Networking"],
    link: "https://github.com/Abdur1R/loadBalancer",
  },
  {
    title: "House Price Predictor",
    description:
      "Machine learning web app that predicts house prices based on user-input features. Built with a trained regression model and deployed with an interactive frontend for real-time price estimation.",
    tech: ["Python", "Machine Learning", "Scikit-learn", "Flask", "HTML/CSS"],
    link: "https://abdur1r.github.io/house-price-predictor-mlproject/",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24">
    <div className="mx-auto w-full max-w-4xl px-6">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-12"
      >
        Selected Work
      </motion.h2>

      <div className="grid gap-4">
        {projects.map((project, i) => (
          <motion.a
            key={i}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease, delay: i * 0.1 }}
            whileHover={{ scale: 1.01 }}
            className="group block p-6 rounded-lg border border-border bg-card hover:border-primary/50 hover:bg-surface-hover transition-colors duration-200"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-base font-medium group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-0.5" />
            </div>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-1 text-[10px] font-mono bg-secondary rounded-md text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
