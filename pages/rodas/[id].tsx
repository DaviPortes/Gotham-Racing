import { useRouter } from "next/router";

export default function RodaPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Detalhes da Roda {id}</h1>
      <p>informações das rodas api.</p>
    </div>
  );
}
