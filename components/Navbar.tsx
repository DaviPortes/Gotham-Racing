import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>Gotham Racing</h2>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/rodas">Rodas</Link></li>
        <li><Link href="/contato">Contato</Link></li>
      </ul>
    </nav>
  );
}
