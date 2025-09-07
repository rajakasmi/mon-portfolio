import Image from "next/image";
import styles from "../styles/Projects.module.css";

export default function ProjectCard({ project }) {
  return (
    <div className={styles.card}>
      <div className={styles.thumb}>
        <Image src={project.image} alt={project.title} layout="fill" objectFit="cover" />
      </div>
      <div className={styles.body}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className={styles.tags}>
          {project.tags.map((t) => <span key={t} className={styles.tag}>{t}</span>)}
        </div>
      </div>
    </div>
  );
}
