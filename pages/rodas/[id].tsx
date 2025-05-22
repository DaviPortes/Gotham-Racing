import { useRouter } from "next/router";

export default function RodaPage() {
  const router = useRouter();
  const { id } = router.query;

  // Exemplo de dados da roda
  const rodas = [
    {
      id: "1",
      nome: 'BBS GT-7',
      descricao: "Roda esportiva de alta performance, ideal para carros de corrida.",
      preco: 'R$ 5.269,00',
      imagem: "/rodas/roda1.png",
    }
  ];

  const roda = rodas.find((r) => r.id === id);

  if (!roda) {
    return <div>Roda não encontrada.</div>;
  }

  return (
    <div className="rodas-page">
      <div className="product-details">
        <img className="product-image" src={roda.imagem} alt={roda.nome} />
        <div className="product-info">
          <h1>{roda.nome}</h1>
          <p>{roda.descricao}</p>
          <p><strong>Preço: {roda.preco}</strong></p>
          <button className="buy-button">Comprar Agora</button>
        </div>
      </div>
    </div>
  );
}
