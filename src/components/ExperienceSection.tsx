import { motion } from "framer-motion";

const experiences = [
  {
    title: "Python Full Stack & AI Engineer",
    company: "S4 Analytics LLC",
    location: "Texas, USA",
    period: "Jan 2024 – Present",
    highlights: [
      "Developed scalable backend services and RESTful APIs using Python/Flask",
      "Trained NLP/classification models, optimized for inference latency and accuracy",
      "Packaged model inference as FastAPI services, deployed to AWS (ECS/ECR, Lambda)",
      "Built CI/CD pipelines with automated testing and blue-green releases",
      "Implemented monitoring with CloudWatch and experiment tracking with MLflow",
      "Designed ETL pipelines and feature stores using S3 and Snowflake",
    ],
    skills: ["Python", "Flask", "FastAPI", "React", "Docker", "AWS", "PyTorch", "Snowflake", "MLflow"],
  },
  {
    title: "Python Full Stack Developer",
    company: "United Consulting Services",
    location: "Hyderabad, India",
    period: "Aug 2021 – Dec 2022",
    highlights: [
      "Developed backend RESTful APIs using Flask for analytics dashboards",
      "Built responsive React frontends with reusable components",
      "Optimized relational schemas and reduced report generation times",
      "Automated ETL jobs with quality checks and alerting",
      "Containerized apps with Docker and deployed to AWS EC2",
      "Established CI/CD practices to increase release stability",
    ],
    skills: ["Python", "React", "Flask", "PostgreSQL", "Docker", "AWS", "pytest"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-muted/40">
      <div className="max-w-4xl mx-auto">
        <motion.div className="mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">Experience</h2>
          <div className="w-12 h-1 bg-primary rounded mt-3" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-3 top-2 bottom-2 w-px bg-border" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                className="relative pl-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                {/* Dot */}
                <div className="absolute left-1.5 top-1.5 w-3 h-3 rounded-full bg-primary border-2 border-background" />

                <div className="bg-card rounded-xl border border-border p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                    <h3 className="font-display text-base font-semibold text-foreground">{exp.title}</h3>
                    <span className="text-xs text-primary font-medium">{exp.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{exp.company} · {exp.location}</p>

                  <ul className="space-y-1.5 mb-4">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.skills.map((s) => (
                      <span key={s} className="text-[11px] px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
