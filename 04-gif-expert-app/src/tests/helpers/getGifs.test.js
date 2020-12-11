import { getGifs } from "../../helpers/getGifs";

describe("Pruebas sobre el helper getGif Fetch", () => {
  test("Debe traer 10 elementos", async () => {
    const gifs = await getGifs("One punch");
    expect(gifs.length).toBe(10);
  });

  test('Debe recibir un argumento en la categoría', async () => {
    const gifs = await getGifs("");
    expect(gifs.length).toBe(0);

  })
  
});
