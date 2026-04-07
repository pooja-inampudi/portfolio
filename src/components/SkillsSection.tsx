import { motion } from "framer-motion";
import { Brain, Code2, Cloud, Database, GitBranch, Bot } from "lucide-react";

const skillCategories = [
  {
    icon: Brain,
    title: "AI & ML",
    skills: ["PyTorch", "Hugging Face", "NLP", "MLflow", "Classification Models", "Model Optimization"],
  },
  {
    icon: Code2,
    title: "Full Stack",
    skills: ["Python", "Flask", "FastAPI", "React", "REST APIs", "TypeScript"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    skills: ["AWS (ECS, ECR, Lambda, S3, EC2)", "Docker", "CI/CD", "Jenkins", "CloudWatch"],
  },
  {
    icon: Database,
    title: "Data & ETL",
    skills: ["PostgreSQL", "MySQL", "Snowflake", "SQL Optimization", "ETL Pipelines", "Feature Stores"],
  },
  {
    icon: Bot,
    title: "Automation",
    skills: ["Selenium", "BeautifulSoup", "Scheduled Jobs", "Pipeline Automation", "Data Ingestion"],
  },
  {
    icon: GitBranch,
    title: "Practices",
    skills: ["Git", "Bitbucket", "Code Reviews", "Testing (pytest)", "Blue-Green Deploys", "RBAC"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-display text-xs tracking-[0.3em] text-primary mb-3 uppercase">Capabilities</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold gradient-text inline-block">Skills & Technologies</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              className="glass rounded-xl p-6 hover:glow-box transition-all duration-500 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <cat.icon size={22} />
                </div>
                <h3 className="font-display text-sm tracking-wider text-foreground">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground border border-border/50"
                  >
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
