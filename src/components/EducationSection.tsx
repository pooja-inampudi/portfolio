import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const education = [
  { school: "Indiana Wesleyan University", degree: "M.S in Computer Science", gpa: "GPA: 4.0 / 4.0" },
  { school: "Jawaharlal Nehru Technological University", degree: "B.Tech in Electrical & Electronics Engineering", gpa: "GPA: 8.7 / 10" },
];

const certificates = [
  { name: "AWS Certified Developer – Associate", issuer: "AWS" },
  { name: "Google Cloud Associate Cloud Engineer", issuer: "Google Cloud" },
  { name: "Databricks Certified Associate", issuer: "Databricks" },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-6 relative">
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-display text-xs tracking-[0.3em] text-primary mb-3 uppercase">Credentials</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold gradient-text inline-block">Education & Certificates</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {education.map((edu, i) => (
            <motion.div
              key={edu.school}
              className="glass rounded-xl p-6 hover:glow-box transition-all duration-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <GraduationCap className="text-primary mb-3" size={28} />
              <h3 className="font-display text-base font-semibold text-foreground mb-1">{edu.degree}</h3>
              <p className="text-muted-foreground text-sm mb-2">{edu.school}</p>
              <span className="text-xs font-display tracking-wider text-primary">{edu.gpa}</span>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.name}
              className="glass rounded-xl p-5 hover:glow-box transition-all duration-500 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Award className="text-accent mx-auto mb-3" size={28} />
              <h3 className="font-display text-xs tracking-wider text-foreground mb-1">{cert.name}</h3>
              <p className="text-muted-foreground text-xs">{cert.issuer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
