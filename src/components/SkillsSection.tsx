import { motion } from "framer-motion";

const skillCategories = [
  { title: "AI & ML", skills: ["PyTorch", "Hugging Face", "NLP", "MLflow", "Model Optimization"] },
  { title: "Full Stack", skills: ["Python", "Flask", "FastAPI", "React", "REST APIs"] },
  { title: "Cloud & DevOps", skills: ["AWS (ECS, ECR, Lambda, S3)", "Docker", "CI/CD", "Jenkins", "CloudWatch"] },
  { title: "Data", skills: ["PostgreSQL", "MySQL", "Snowflake", "SQL Optimization", "ETL Pipelines"] },
  { title: "Automation", skills: ["Selenium", "BeautifulSoup", "Scheduled Jobs", "Data Ingestion"] },
  { title: "Practices", skills: ["Git", "Code Reviews", "Testing (pytest)", "Blue-Green Deploys", "RBAC"] },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div className="mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">Skills & Technologies</h2>
          <div className="w-12 h-1 bg-primary rounded mt-3" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              className="p-5 rounded-xl border border-border bg-card hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <h3 className="font-display text-sm font-semibold text-foreground mb-3">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span key={skill} className="text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
