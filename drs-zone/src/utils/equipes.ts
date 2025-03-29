export async function getEquipes() {
  const response = await fetch(`/api/equipes`);
  return response.json();
}

export async function getEquipesPorAno(ano: string) {
  const response = await fetch(`/api/equipes/${ano}`, {
    method: "GET",
    body: ano,
  });
  return response.json();
}
  