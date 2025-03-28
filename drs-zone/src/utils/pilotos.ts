export async function getPilotos() {
  const response = await fetch("/api/pilotos");
  return response.json();
}
