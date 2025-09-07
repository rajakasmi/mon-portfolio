import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />
      <section style={{maxWidth:960, margin:"2rem auto", padding:"0 1rem"}}>
        <h1>À propos de moi</h1>
        <p>
          Je suis un développeur web passionné par la création d'applications performantes et accessibles.
          J'aime utiliser Next.js pour construire des interfaces rapides, SEO-friendly et faciles à maintenir.
        </p>
        <h2>Compétences</h2>
        <ul>
          <li>React / Next.js</li>
          <li>HTML & CSS (Modules, Tailwind)</li>
          <li>Node.js, APIs REST</li>
          <li>Git, Vercel</li>
        </ul>
      </section>
      <Footer />
    </>
  );
}
