import styles from "../styles/About.module.css"

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.aboutContainer}>
        <h1>About Me</h1>
        <p>
          Hi, I'm <strong>Khizr</strong>, an Associate Developer with 15 months of
          experience (across three teams) in back-end, cloud development and front-end. I'm currently seeking a
          <strong> Junior Software Developer role</strong> in London (remote or hybrid).
        </p>
        
        <h2>My Experience</h2>
        <p>
          Over the past 15 months, I've worked with:
        </p>
        <ul>
          <li><strong>AWS Lambda & Step Functions</strong> - Building microservices for serverless applications using Node.js</li>
          <li><strong>Next.js & TypeScript</strong> - Developing front-end components and writing comprehensive unit tests using Jest</li>
          <li><strong>Java & Spring Boot</strong> - Maintaining & improving upon scalable backend systems</li>
          <li><strong>Multiple Teams</strong> - Worked across various projects gaining familiarity with onboarding processes and stronger soft skills</li>
        </ul>
        
        <h2>What I'm Looking For</h2>
        <p>
          With <strong>three months left in my current role</strong>, I'm actively searching
          for a <strong>Junior Software Developer</strong> position where I can continue
          growing my exposure to various technologies, and learning more about them!
        </p>
        
        <h2>Let's Connect</h2>
        <p>I'm open to new opportunities and would love to connect!</p>
      </div>
    </section>
  );
}