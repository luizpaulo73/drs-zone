export async function getEquipes() {
  const response = await fetch("/api/equipes");
  return response.json();
}
  