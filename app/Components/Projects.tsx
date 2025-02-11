"use client";
import React from "react";
import styles from "../styles/Projects.module.css";

const projects = [
  {
    title: "Mood Music App",
    description: "An app that generates a playlist based on your mood.",
    github: "https://github.com/sadlycryingbird/mood-music-app",
    status: "In Design", // Updated status
  },
  // Future projects will be added here
];

export default function Projects() {
  return (
    <section className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.title}>Projects</h2>
        <p className={styles.subtitle}>
          Here are some of the projects I've worked on or am currently building.
        </p>

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