import Navbar from "../components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="hero">
        <div className="hero-content">
          <h1>As Melhores Rodas Esportivas do Brasil</h1>
          <Link href="/rodas">
            <button>Ver Catálogo</button>
          </Link>
        </div>
      </section>

      <section className="produtos">
        <h2>Rodas em Destaque</h2>
        <div className="grid">
          {[1, 2, 3, 4].map((id) => (
            <Link href={`/rodas/${id}`} key={id}>
              <div className="card">
                <img src="/rodas/placeholder.png" alt="Roda esportiva" />
                <div className="card-details">
                  <p>Roda Modelo {id}</p>
                  <p className="price">R$ 2.499,00</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>© Gotham Racing - Todos os direitos reservados</p>
      </footer>
    </>
  );
}
