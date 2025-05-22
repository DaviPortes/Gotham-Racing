export default function handler(req, res) {
  const rodas = [
    {
      id: 1,
      nome: 'BBS GT-7',
      preco: 'R$ 5.269,00',
      descricao: 'Roda esportiva de alta performance, ideal para carros de corrida.',
      imagem: '/rodas/roda1.png'
    },
    {
      id: 2,
      nome: 'OZ Superleggera',
      preco: 'R$ 4.299,00',
      descricao: 'Roda projetada para uso em pista e estrada, com durabilidade e design inovador.',
      imagem: '/rodas/roda2.png'
    },
    {
      id: 3,
      nome: 'Enkei RPF1',
      preco: 'R$ 20.499,00',
      descricao: 'Roda de competição com alta resistência a impactos e desempenho superior.',
      imagem: '/rodas/roda3.png'
    },
    {
      id: 4,
      nome: 'KR M16',
      preco: 'R$ 3.123,00',
      descricao: 'Roda esportiva de alta performance, ideal para carros de corrida.',
      imagem: '/rodas/roda4.png'
    },
    {
      id: 5,
      nome: 'ZEUS ZWAR8',
      preco: 'R$ 4.199,00',
      descricao: 'Roda projetada para uso em pista e estrada, com durabilidade e design inovador.',
      imagem: '/rodas/roda5.png'
    },
    {
      id: 6,
      nome: 'Orbital',
      preco: 'R$ 2.229,00',
      descricao: 'Roda de competição com alta resistência a impactos e desempenho superior.',
      imagem: '/rodas/roda6.png'
    }
  ];

  res.status(200).json(rodas);
}
