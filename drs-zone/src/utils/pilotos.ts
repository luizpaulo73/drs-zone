export async function getPilotos() {
  const date = new Date();
  const year = date.getFullYear();
  const response = await fetch(
    `http://api.jolpi.ca/ergast/f1/${year}/driverstandings/`
  );

  if (!response.ok) {
    throw new Error("Erro ao carregar dados");
  }
  const pilotoResponse = await response.json();

  return pilotoResponse;
}
