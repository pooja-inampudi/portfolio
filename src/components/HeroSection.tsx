import { motion } from "framer-motion";
import { Bot, Brain, Cpu } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-20" />

      {/* Floating icons */}
      <motion.div
        className="absolute top-1/4 left-[15%] text-primary/30"
        animate={{ y: [-10, 10, -10], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        <Bot size={48} />
      </motion.div>
      <motion.div
        className="absolute top-1/3 right-[15%] text-accent/30"
        animate={{ y: [10, -10, 10], rotate: [0, -5, 5, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      >
        <Brain size={40} />
      </motion.div>
      <motion.div
        className="absolute bottom-1/3 left-[25%] text-primary/20"
        animate={{ y: [5, -15, 5] }}
        transition={{ duration: 9, repeat: Infinity }}
      >
        <Cpu size={36} />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-display text-sm tracking-[0.3em] text-primary mb-4 uppercase">
            Python Full Stack & AI Engineer
          </p>
        </motion.div>

        <motion.h1
          className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="gradient-text">Building</span>{" "}
          <span className="text-foreground">Intelligent</span>
          <br />
          <span className="text-foreground">Systems</span>{" "}
          <span className="gradient-text">& Bots</span>
        </motion.h1>

        <motion.p
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Crafting scalable backend services, AI/ML pipelines, and full-stack applications
          with a passion for automation and intelligent solutions.
        </motion.p>

        <motion.div
          className="flex gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="#experience"
            className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-display text-sm tracking-wider hover:glow-box transition-all duration-300"
          >
            VIEW EXPERIENCE
          </a>
          <a
            href="#connect"
            className="px-8 py-3 rounded-lg border border-primary/30 text-primary font-display text-sm tracking-wider hover:bg-primary/10 transition-all duration-300"
          >
            LET'S CONNECT
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-pulse_glow" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
