export async function getPilotos() {
  const response = await fetch(`/api/pilotos`);
  return response.json();
}

export async function getPilotosPorAno(ano: string) {
  const response = await fetch(`/api/pilotos/${ano}`);
  return response.json();
}
