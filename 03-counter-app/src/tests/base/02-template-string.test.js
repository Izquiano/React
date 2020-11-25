import "@testing-library/jest-dom";
const { getSaludo } = require("../../base/02-template-string");

describe("Pruebas en 02-template-string.js", () => {
  test("Prueba en el método getSaludo", () => {
    const nombre = "Fernando";
    const saludo = getSaludo(nombre);

    expect(saludo).toBe("Hola " + nombre + "!");
  });

  // getSaludo debe retornar "Hola Carlos!" si no hay argumentos
  test('getSaludo debe retornar "Hola Carlos!" si no hay argumentos', () => {
    
    const saludo = getSaludo()
    expect( saludo ).toBe( 'Hola Carlos!' )
  })
  
});
