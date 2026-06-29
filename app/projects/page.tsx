import styles from "../styles/Projects.module.css";

export default function ProjectsPage() {
  const projects = [
    {
      title: "World Builder",
      description:
        "A full-stack application that helps writers organise fictional worlds, characters, lore and relationships.",
      technologies: [
        "Java",
        "Spring Boot",
        "PostgreSQL",
        "Flyway",
        "Docker",
        "Next.js",
        "TypeScript",
      ],
      github: "https://github.com/khizrfazal/world-builder",
      status: "In Development",
    },
  ];

  return (
    <section className={styles.projects}>
      <div className={styles.container}>
        <h1 className={styles.title}>Projects</h1>

        <p className={styles.subtitle}>
          Personal projects focused on backend engineering, clean architecture
          and modern web development.
        </p>

        <div className={styles.grid}>
          {projects.map((project) => (
            <article
              key={project.title}
              className={styles.projectCard}
            >
              <span className={styles.status}>
                {project.status}
              </span>

              <h2 className={styles.projectTitle}>
                {project.title}
              </h2>

              <p className={styles.projectDescription}>
                {project.description}
              </p>

              <div className={styles.techStack}>
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.githubButton}
              >
                View on GitHub →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}