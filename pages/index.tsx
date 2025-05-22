import Navbar from "../components/Navbar";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [rodas, setRodas] = useState([]);

  useEffect(() => {
    const fetchRodas = async () => {
      const response = await fetch('/api/rodas');
      const data = await response.json();
      setRodas(data);
    };

    fetchRodas();
  }, []);

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
          {rodas.map((roda) => (
            <Link href={`/rodas/${roda.id}`} key={roda.id}>
              <div className="card">
                <img src={roda.imagem} alt={roda.nome} />
                <div className="card-details">
                  <p>{roda.nome}</p>
                  <p className="price">{roda.preco}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="contato">
        <h2>Entre em Contato</h2>
        <p>Email: contato@gothamracing.com.br</p>
        <p>Telefone: (11) 1234-5678</p>
      </section>

      <footer className="footer">
        <p>© Gotham Racing - Todos os direitos reservados</p>
      </footer>
    </>
  );
}
