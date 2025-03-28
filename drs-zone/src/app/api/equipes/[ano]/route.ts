export async function GET(context: { params: { ano: number } }) {
    
    const { ano } = context.params;
    const url = `https://api.jolpi.ca/ergast/f1/${ano}/constructorstandings/?format=json`;
  
    try {
        const response = await fetch(url);
        const data = await response.json();
        return Response.json(data);
      } catch (error) {
        return new Response(JSON.stringify({ error: "Erro ao buscar pilotos" }), { status: 500 });
      }
  }