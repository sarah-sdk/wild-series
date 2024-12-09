export async function fetchApi() {
  const apiUrl = `${import.meta.env.VITE_API_URL}/api/programs`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    return [];
  }
}
