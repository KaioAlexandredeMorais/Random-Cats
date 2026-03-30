async function getCat() {
  const url = "https://api.thecatapi.com/v1/images/search";

  try {
    const response = await fetch(url);
    const data = await response.json();

    const catUrl = data[0].url;

    document.getElementById("cat-image").src = catUrl;
  } catch (error) {
    console.error("Erro ao buscar o gatinho:", error);
  }
}

getCat();
