export async function getPets(url, setData, setError) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data = await response.json();

    return setData(data.data);
  } catch (error) {
    return setError(error.message);
  }
}
