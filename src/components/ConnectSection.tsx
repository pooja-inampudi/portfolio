import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin, Send } from "lucide-react";
import { useState } from "react";

const ConnectSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:your.email@example.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email}`;
    window.open(mailto);
  };

  return (
    <section id="connect" className="py-24 px-6 relative">
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-display text-xs tracking-[0.3em] text-primary mb-3 uppercase">Contact</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold gradient-text inline-block">Let's Connect</h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Interested in collaboration or have a project in mind? Let's build something intelligent together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass rounded-xl p-6 space-y-5">
              <a href="mailto:your.email@example.com" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs font-display tracking-wider text-muted-foreground/60 mb-0.5">EMAIL</p>
                  <p className="text-sm text-foreground">your.email@example.com</p>
                </div>
              </a>

              <a href="#" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <Linkedin size={20} />
                </div>
                <div>
                  <p className="text-xs font-display tracking-wider text-muted-foreground/60 mb-0.5">LINKEDIN</p>
                  <p className="text-sm text-foreground">linkedin.com/in/yourprofile</p>
                </div>
              </a>

              <a href="#" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <Github size={20} />
                </div>
                <div>
                  <p className="text-xs font-display tracking-wider text-muted-foreground/60 mb-0.5">GITHUB</p>
                  <p className="text-sm text-foreground">github.com/yourprofile</p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs font-display tracking-wider text-muted-foreground/60 mb-0.5">LOCATION</p>
                  <p className="text-sm text-foreground">Texas, USA</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.form
            onSubmit={handleSubmit}
            className="glass rounded-xl p-6 space-y-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <label className="text-xs font-display tracking-wider text-muted-foreground block mb-2">NAME</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-xs font-display tracking-wider text-muted-foreground block mb-2">EMAIL</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="text-xs font-display tracking-wider text-muted-foreground block mb-2">MESSAGE</label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-display text-sm tracking-wider hover:glow-box transition-all duration-300"
            >
              <Send size={16} />
              SEND MESSAGE
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
