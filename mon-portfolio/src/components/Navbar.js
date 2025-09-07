
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between p-4 bg-gray-900 text-white">
      <h1 className="text-xl font-bold">Mon Portfolio</h1>
      <div className="space-x-4">
        <Link href="/">Accueil</Link>
        <Link href="/about">À propos</Link>
        <Link href="/projects">Projets</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
