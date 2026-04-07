import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Python Full Stack & AI Engineer",
    company: "S4 Analytics LLC",
    location: "Texas, USA",
    period: "Jan 2024 – Present",
    highlights: [
      "Developed scalable backend services and RESTful APIs using Python/Flask for internal and client-facing apps",
      "Trained and validated NLP/classification models, optimized for inference latency and accuracy",
      "Packaged model inference as FastAPI services, containerized with Docker, deployed to AWS (ECS/ECR, Lambda)",
      "Built CI/CD pipelines with automated testing, container builds, and blue-green releases",
      "Implemented monitoring with CloudWatch and tracked experiments/model lineage with MLflow",
      "Designed ETL pipelines and feature stores using S3 and Snowflake",
    ],
    skills: ["Python", "Flask", "FastAPI", "React", "Docker", "AWS", "PyTorch", "Hugging Face", "Snowflake", "MLflow"],
  },
  {
    title: "Python Full Stack Developer",
    company: "United Consulting Services",
    location: "Hyderabad, India",
    period: "Aug 2021 – Dec 2022",
    highlights: [
      "Developed and maintained backend RESTful APIs using Flask for analytics dashboards",
      "Built responsive React frontends with reusable components and state management",
      "Designed and optimized relational schemas, reduced report generation times",
      "Automated ETL and scheduled jobs for data ingestion with quality checks and alerting",
      "Containerized applications with Docker and deployed to AWS EC2",
      "Established CI/CD practices to increase release stability and reduce defects",
    ],
    skills: ["Python", "React", "Flask", "PostgreSQL", "MySQL", "Docker", "AWS", "pytest"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-display text-xs tracking-[0.3em] text-primary mb-3 uppercase">Journey</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold gradient-text inline-block">Experience Timeline</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 timeline-line" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              className={`relative flex flex-col md:flex-row gap-8 mb-16 ${
                i % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary glow-box z-10 mt-8" />

              {/* Spacer */}
              <div className="hidden md:block md:w-1/2" />

              {/* Card */}
              <div className="ml-16 md:ml-0 md:w-1/2 glass rounded-xl p-6 hover:glow-box transition-all duration-500">
                <div className="flex items-center gap-2 mb-1">
                  <Briefcase size={16} className="text-primary" />
                  <span className="font-display text-xs tracking-wider text-primary">{exp.period}</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">{exp.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {exp.company} · {exp.location}
                </p>
                <ul className="space-y-2 mb-4">
                  {exp.highlights.map((h, j) => (
                    <li key={j} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-primary mt-1.5 shrink-0">▹</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5">
                  {exp.skills.map((s) => (
                    <span key={s} className="text-[10px] px-2 py-1 rounded-full bg-primary/10 text-primary font-display tracking-wider">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
