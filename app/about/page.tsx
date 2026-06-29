import styles from "../styles/About.module.css"

export default function AboutPage() {
  return (
    <section className={styles.about}>
      <div className={styles.aboutContainer}>
        <h1>About Me</h1>
        <p>
          Hi, I'm <strong>Khizr</strong>, a Software Developer with over 2.5 years of
          professional experience building and maintaining full‑stack applications.
          I’ve worked primarily with <strong>Java Spring Boot</strong> monoliths and
          <strong> Next.js frontends</strong>, owning features end‑to‑end, debugging
          production issues, and mentoring juniors. I’m now seeking a <strong>Mid‑Level Developer role</strong> in London
          (hybrid or remote), ideally in a scale‑up or collaborative team where
          clear communication and technical ownership are valued.
        </p>

        <h2>My Experience</h2>
        <ul>
          <li><strong>Java & Spring Boot</strong> – Designed and maintained scalable backend services, implemented RBAC features, and improved Redis usage for performance.</li>
          <li><strong>Next.js & TypeScript</strong> – Built reusable front‑end components, App Router layouts, and comprehensive test suites with Jest/React Testing Library.</li>
          <li><strong>Production Debugging</strong> – Provided L3 support, tracing failures across distributed systems using correlation IDs, Kibana, and AWS Workspaces.</li>
          <li><strong>Collaboration</strong> – Mentored juniors, improved onboarding documentation, and clarified requirements in complex legacy environments.</li>
          <li><strong>Exposure to AWS Lambda & Step Functions</strong> – Paired on serverless workflows, learning cost‑efficient pay‑per‑use patterns.</li>
        </ul>

        <h2>Let's Connect</h2>
        <p>
          I’m open to new opportunities and would love to connect!
        </p>
      </div>
    </section>
  );
}