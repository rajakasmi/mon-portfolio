import { useState, useMemo } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import styles from "../styles/Projects.module.css";

/* Exemple de données ; en vrai tu peux charger depuis un CMS ou fichier JSON */
const ALL_PROJECTS = [
  {
    id: 1,
    title: "Portfolio Next.js",
    description: "Site portfolio construit avec Next.js et CSS Modules.",
    image: "/projet1.jpg",
    tags: ["Next.js", "Frontend"]
  },
  {
    id: 2,
    title: "E-commerce React",
    description: "Prototype d'un shop en ligne avec panier et filtres.",
    image: "/projet2.jpg",
    tags: ["React", "Commerce"]
  },
  {
    id: 3,
    title: "API Node.js",
    description: "API REST pour gestion de tâches, déployée sur Heroku.",
    image: "/projet3.jpg",
    tags: ["Node.js", "Backend"]
  }
];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const tags = useMemo(() => {
    const s = new Set();
    ALL_PROJECTS.forEach(p => p.tags.forEach(t => s.add(t)));
    return ["All", ...Array.from(s)];
  }, []);

  const visible = ALL_PROJECTS.filter(p => filter === "All" || p.tags.includes(filter));

  return (
    <>
      <Navbar />
      <section className={styles.wrapper}>
        <h1>Projets</h1>

        <div className={styles.filters}>
          {tags.map(t => (
            <button
              key={t}
              className={`${styles.filterBtn} ${filter===t?styles.active:""}`}
              onClick={() => setFilter(t)}
            >
              {t}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {visible.map(p => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
