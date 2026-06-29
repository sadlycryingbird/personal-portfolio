import styles from "../styles/About.module.css";

export default function AboutPage() {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <h1>About Me</h1>

        <p className={styles.intro}>
          I'm <strong>Khizr</strong>, a software engineer with over 2.5
          years of experience building and maintaining production full-stack
          applications. My primary focus is backend development with Java and
          Spring Boot, alongside building modern web applications using Next.js
          and TypeScript.
        </p>

        <p className={styles.intro}>
          I care about writing clean, maintainable code and designing systems
          that are reliable under real-world production constraints. I enjoy
          working across backend systems, improving performance, and
          collaborating with teams to deliver robust features.
        </p>

        <h2>Experience Highlights</h2>

        <div className={styles.highlights}>
          <div className={styles.highlight}>
            <h3>Backend Engineering</h3>
            <p>
              Built and maintained Java Spring Boot services for a public-sector
              identity and access management system, implementing role-based
              access control (RBAC), optimising PostgreSQL queries, and
              supporting production deployments in a distributed environment.
            </p>
          </div>

          <div className={styles.highlight}>
            <h3>Frontend & Full-Stack Development</h3>
            <p>
              Developed reusable Next.js and TypeScript components with a focus
              on maintainable UI architecture, integration with backend APIs,
              and testing using Jest and React Testing Library.
            </p>
          </div>

          <div className={styles.highlight}>
            <h3>Production Support & Reliability</h3>
            <p>
              Investigated and resolved production issues across distributed
              systems using correlation IDs, Kibana, and AWS tooling, supporting
              live services in high-availability environments.
            </p>
          </div>

          <div className={styles.highlight}>
            <h3>Collaboration & Engineering Practices</h3>
            <p>
              Worked closely with cross-functional teams to deliver production
              features, mentored junior developers, and improved onboarding
              documentation and internal engineering practices.
            </p>
          </div>

          <div className={styles.highlight}>
            <h3>Current Focus</h3>
            <p>
              Currently building <strong>World Builder</strong>, a full-stack
              application for writers to design and manage fictional worlds,
              with emphasis on backend architecture, relational modelling, and
              clean API design using Java, Spring Boot, PostgreSQL, Flyway,
              Docker, Next.js and TypeScript.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}