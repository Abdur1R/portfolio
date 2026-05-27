import { motion } from "framer-motion";
import { Copy, Check, Download } from "lucide-react";
import { useState } from "react";
import LinkedinProfilePic from "../../public/LinkedinProfilePic.png"

const ease: [number, number, number, number] = [0.23, 1, 0.32, 1];

const HeroSection = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("abdurrahmanshaik111@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center py-24">
      <div className="mx-auto w-full max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-10"
        >
          <div className="flex-1">
            {/* Status beacon */}
            <div className="flex items-center gap-3 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-beacon-ping absolute inline-flex h-full w-full rounded-full bg-beacon opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-beacon" />
              </span>
              <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
                Open to opportunities
              </span>
            </div>

            {/* Name & Role */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.05]">
              Abdur Rahman Shaik
            </h1>
            <p className="mt-2 font-mono text-sm text-muted-foreground tracking-wide">
              Full Stack Developer
            </p>

            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed text-balance">
              Building high-performance interfaces and scalable distributed systems.
              Focused on the intersection of design systems, cloud infrastructure, and AI.
            </p>

            {/* Actions */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button
                onClick={copyEmail}
                className="group flex items-center gap-2 px-4 py-2.5 bg-secondary border border-border rounded-lg font-mono text-xs tracking-wide hover:border-primary/50 transition-colors duration-200"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-beacon" />
                    <span className="text-beacon">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-muted-foreground group-hover:text-foreground transition-colors" />
                    <span>abdurrahmanshaik111@gmail.com</span>
                  </>
                )}
              </button>

              <a
                href={`${import.meta.env.BASE_URL}AbdurRahman_Shaik_Resume.pdf`}
                download
                className="group flex items-center gap-2 px-4 py-2.5 bg-primary/10 border border-primary/30 rounded-lg font-mono text-xs tracking-wide hover:bg-primary/20 hover:border-primary/50 transition-colors duration-200 text-primary"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Resume</span>
              </a>

              <div className="flex items-center gap-3">
                {[
                  { label: "GitHub", url: "https://github.com/Abdur1R" },
                  { label: "LinkedIn", url: "https://linkedin.com/in/abdurrahmanshaik" },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4 decoration-border hover:decoration-primary"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease, delay: 0.3 }}
            className="shrink-0"
          >
            <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-2 border-border bg-card ring-4 ring-primary/10">
              <img
                src={LinkedinProfilePic}
                alt="Abdur Rahman Shaik"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
