import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe("Pruebas en funciones de heroes", () => {
  test("Debe retornar un heroe por id ", () => {
    const id = 1;
    const heroe = getHeroeById(id);
    const heroeData = heroes.find((h) => h.id === id);

    expect(heroe).toEqual(heroeData);
  });
  test("Debe retornar undefined si heroe no existe", () => {
    const id = 10;
    const heroe = getHeroeById(id);

    expect(heroe).toBe(undefined);
  });
});

// Debe retornar un arreglo con  los héroes de DC
// Owner
// toEqual al arreglo filtrado

// Debe retornar un arreglo con los héroes de Marvel
// length = 2 // toBe

describe("Pruebas sobre la función getHeroesByOwner", () => {
  test("Debe retornar un arreglo con los héroes de DC", () => {
    const owner = "DC";
    const heroe = getHeroesByOwner(owner);
    const heroesData = heroes.filter((h) => h.owner === owner);

    expect(heroe).toEqual(heroesData);
  });
  test("Debe retornar un arreglo con los héroes de Marvel", () => {
    const owner = "Marvel";
    const heroe = getHeroesByOwner(owner);

    expect(heroe.length).toBe(2);
  });
});
