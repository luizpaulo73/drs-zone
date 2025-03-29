export async function getCorridas() {
    const response = await fetch('/api/corrida');
    return response.json();
}