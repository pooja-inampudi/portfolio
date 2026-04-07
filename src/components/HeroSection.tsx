import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="min-h-[85vh] flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <motion.p
          className="text-sm font-medium text-primary mb-4 tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Python Full Stack & AI Engineer
        </motion.p>

        <motion.h1
          className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Building Scalable
          <br />
          <span className="gradient-text">AI-Powered</span> Solutions
        </motion.h1>

        <motion.p
          className="text-muted-foreground text-lg max-w-xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Crafting backend services, ML pipelines, and full-stack apps with a focus on clean code and intelligent automation.
        </motion.p>

        <motion.div
          className="flex gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a href="#experience" className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
            View Experience
          </a>
          <a href="#connect" className="px-6 py-2.5 rounded-lg border border-border text-foreground text-sm font-medium hover:bg-muted transition-colors">
            Let's Connect
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
