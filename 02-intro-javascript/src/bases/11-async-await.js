const getImagen = async () => {
  try {
    const apiKey = "eCo9jZZDDrjAU4rSAwZmpQAktSnSUNGq";
    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();
    const { url } = data.images.original;

    const img = document.createElement("img");
    img.src = url;

    document.body.appendChild(img);
  } catch (error) {
    // manejo del error
    console.error(error)
  }
};

getImagen();
