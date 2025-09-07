import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={styles.container}>
        <div className={styles.card}>
          <Image
            src="/profile.jpg"
            alt="Photo de profil"
            width={150}
            height={150}
            className={styles.profileImage}
          />
          <h1 className={styles.title}>Salut — je suis Raja Guesmi</h1>
          <p className={styles.subtitle}>Développeur Web • Next.js • React</p>
          <a className={styles.cta} href="/projects">Voir mes projets</a>
        </div>
      </main>
      <Footer />
    </>
  );
}
