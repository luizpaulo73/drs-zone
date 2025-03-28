export async function getPilotos() {
  const response = await fetch(`/api/pilotos`);
  return response.json();
}

export async function getPilotosPorAno(ano: number) {
  const response = await fetch(`/api/pilotos/${ano}`);
  return response.json();
}