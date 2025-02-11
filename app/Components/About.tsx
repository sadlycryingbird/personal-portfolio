import Link from "next/link";
import styles from "../styles/About.module.css"

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.aboutContainer}>
        <h1>About Me</h1>
        <p>
          Hi, I'm <strong>Khizr</strong>, an Associate Developer with 15 months of
          experience (across three teams) in back-end, cloud development and front-end. I'm currently seeking a
          <strong> Junior Backend Developer role</strong> in London (remote or hybrid).
        </p>
        
        <h2>My Experience</h2>
        <p>
          Over the past 15 months, I've worked with:
        </p>
        <ul>
          <li><strong>AWS Lambda & Step Functions</strong> - Building microservices for serverless applications.</li>
          <li><strong>Next.js & Node.js</strong> - Developing full-stack applications.</li>
          <li><strong>TypeScript & Java</strong> - Creating scalable backend systems.</li>
          <li><strong>Spring Boot</strong> - Building backend APIs.</li>
        </ul>
        
        <h2>What I'm Looking For</h2>
        <p>
          With <strong>three months left in my current role</strong>, I'm actively searching
          for a <strong>Junior Backend Developer</strong> position where I can continue
          growing my expertise in backend development, cloud computing, and
          distributed systems.
        </p>
        
        <h2>Let's Connect</h2>
        <p>I'm open to new opportunities and would love to connect!</p>
      </div>
    </section>
  );
}