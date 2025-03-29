export async function GET(request, context) {
  const { ano } = await context.params;
  const url = `http://api.jolpi.ca/ergast/f1/${ano}/driverstandings/?format=json`;
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    return Response.json({ error: error }, { status: 500 });
  }
}