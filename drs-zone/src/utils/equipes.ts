export async function getEquipes() {
    const date = new Date();
    const year = date.getFullYear();
    const response = await fetch(`https://api.jolpi.ca/ergast/f1/${year}/constructorstandings/?format=json`);
  
    if (!response.ok) {
      throw new Error("Erro ao carregar dados");
    }
    const equipeResponse = await response.json();
  
    return equipeResponse;
  }
  