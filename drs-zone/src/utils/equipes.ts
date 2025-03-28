export async function getEquipes() {
  const response = await fetch(`/api/equipes`);
  return response.json();
}

export async function getEquipesPorAno(ano: number) {
  const response = await fetch(`/api/equipes/${ano}`);
  return response.json();
}
  