import styles from "../styles/Projects.module.css";

export default function ProjectsPage() {
    const projects = [
      {
        title: "World Builder",
        description: "A story-building tool for creating worlds, characters, relationships, and lore",
        github: "https://github.com/sadlycryingbird/world-builder",
        status: "In Development",
      },
      // Future projects will be added here
    ];
      return (
        <section className={styles.projects}>
          <div className={styles.container}>
            <div className={styles.grid}>
              {projects.map((project, index) => (
                <div key={index} className={styles.projectCard}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDescription}>{project.description}</p>
                  <div className={styles.projectStatus}>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.githubButton}
                    >
                      View on GitHub
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
}