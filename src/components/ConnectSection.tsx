import { motion } from "framer-motion";
import { Mail, MapPin, Send, ExternalLink, Code2 } from "lucide-react";
import { useState } from "react";

const ConnectSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:your.email@example.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email}`;
    window.open(mailto);
  };

  return (
    <section id="connect" className="py-20 px-6 bg-muted/40">
      <div className="max-w-5xl mx-auto">
        <motion.div className="mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">Let's Connect</h2>
          <div className="w-12 h-1 bg-primary rounded mt-3" />
          <p className="text-muted-foreground mt-4 max-w-lg">
            Interested in collaboration or have a project in mind? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div className="space-y-4" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <a href="mailto:your.email@example.com" className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover:shadow-sm transition-shadow group">
              <Mail size={18} className="text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="text-sm text-foreground">your.email@example.com</p>
              </div>
            </a>
            <a href="#" className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover:shadow-sm transition-shadow group">
              <ExternalLink size={18} className="text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">LinkedIn</p>
                <p className="text-sm text-foreground">linkedin.com/in/yourprofile</p>
              </div>
            </a>
            <a href="#" className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover:shadow-sm transition-shadow group">
              <Code2 size={18} className="text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">GitHub</p>
                <p className="text-sm text-foreground">github.com/yourprofile</p>
              </div>
            </a>
            <div className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card">
              <MapPin size={18} className="text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Location</p>
                <p className="text-sm text-foreground">Texas, USA</p>
              </div>
            </div>
          </motion.div>

          <motion.form onSubmit={handleSubmit} className="space-y-4" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div>
              <label className="text-xs text-muted-foreground block mb-1.5">Name</label>
              <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-card border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                placeholder="Your name" />
            </div>
            <div>
              <label className="text-xs text-muted-foreground block mb-1.5">Email</label>
              <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-card border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                placeholder="your@email.com" />
            </div>
            <div>
              <label className="text-xs text-muted-foreground block mb-1.5">Message</label>
              <textarea required rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-card border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none"
                placeholder="Tell me about your project..." />
            </div>
            <button type="submit" className="w-full flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
              <Send size={16} />
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
