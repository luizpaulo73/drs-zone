export async function GET(context: { params: { ano: number } }) {

    const { ano } = context.params;
    const url = `http://api.jolpi.ca/ergast/f1/${ano}/driverstandings/?format=json`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      return Response.json(data);
    } catch (error) {
      return new Response(JSON.stringify({ error: "Erro ao buscar pilotos" }), { status: 500 });
    }
}