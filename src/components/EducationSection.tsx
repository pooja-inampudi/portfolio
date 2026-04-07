import { motion } from "framer-motion";

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
    <section id="education" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div className="mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">Education & Certificates</h2>
          <div className="w-12 h-1 bg-primary rounded mt-3" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {education.map((edu, i) => (
            <motion.div
              key={edu.school}
              className="p-5 rounded-xl border border-border bg-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="font-display text-sm font-semibold text-foreground mb-1">{edu.degree}</h3>
              <p className="text-sm text-muted-foreground mb-2">{edu.school}</p>
              <span className="text-xs font-medium text-primary">{edu.gpa}</span>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.name}
              className="p-4 rounded-xl border border-border bg-card text-center"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="text-sm font-medium text-foreground mb-1">{cert.name}</h3>
              <p className="text-xs text-muted-foreground">{cert.issuer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
