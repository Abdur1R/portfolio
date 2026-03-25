import { motion } from "framer-motion";
import {
  User,
  Briefcase,
  FolderGit2,
  Cpu,
  GraduationCap,
  MessageSquare,
  Info,
} from "lucide-react";

const links = [
  { label: "Home", target: "hero", icon: User },
  { label: "About", target: "about", icon: Info },
  { label: "Experience", target: "experience", icon: Briefcase },
  { label: "Projects", target: "projects", icon: FolderGit2 },
  { label: "Skills", target: "skills", icon: Cpu },
  { label: "Education", target: "education", icon: GraduationCap },
  { label: "Contact", target: "contact", icon: MessageSquare },
];

const DockNav = () => {
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 px-3 py-2 rounded-2xl border border-border bg-card/80 backdrop-blur-md shadow-lg"
    >
      {links.map(({ label, target, icon: Icon }) => (
        <button
          key={label}
          onClick={() => handleScroll(target)}
          className="group flex items-center gap-2 px-3 py-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-200"
          title={label}
          type="button"
        >
          <Icon className="w-4 h-4" />
          <span className="hidden sm:inline text-xs font-mono">{label}</span>
        </button>
      ))}
    </motion.nav>
  );
};

export default DockNav;