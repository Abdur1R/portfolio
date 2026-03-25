import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, Send } from "lucide-react";
import { useState } from "react";

const ease: [number, number, number, number] = [0.23, 1, 0.32, 1];

const socials = [
  {
    label: "Email",
    value: "abdurrahmanshaik111@gmail.com",
    href: "mailto:abdurrahmanshaik111@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/Abdur1R",
    href: "https://github.com/Abdur1R",
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/abdurrahmanshaik",
    href: "https://linkedin.com/in/abdurrahmanshaik",
    icon: Linkedin,
  },
  {
    label: "Location",
    value: "Cincinnati, OH",
    href: "#",
    icon: MapPin,
  },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Opens mailto with pre-filled content
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`);
    window.open(`mailto:abdurrahmanshaik111@gmail.com?subject=${subject}&body=${body}`);
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto w-full max-w-4xl px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4"
        >
          Get In Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="text-lg text-muted-foreground mb-12 max-w-lg"
        >
          Have a project in mind or want to chat? Feel free to reach out — I'd love to connect.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="space-y-4"
          >
            <div>
              <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2 block">
                Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-card text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2 block">
                Email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-card text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2 block">
                Message
              </label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-card text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                placeholder="What's on your mind?"
              />
            </div>
            <button
              type="submit"
              className="group flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-mono text-xs uppercase tracking-widest hover:bg-primary/90 transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
              {sent ? "Opening mail client..." : "Send Message"}
            </button>
          </motion.form>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease, delay: 0.15 }}
            className="space-y-4"
          >
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-4 p-4 rounded-lg border border-border bg-card hover:border-primary/50 hover:bg-surface-hover transition-colors duration-200"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-secondary">
                  <s.icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {s.label}
                  </p>
                  <p className="text-sm text-foreground group-hover:text-primary transition-colors">
                    {s.value}
                  </p>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
