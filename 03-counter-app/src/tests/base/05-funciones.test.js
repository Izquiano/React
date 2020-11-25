import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe("Pruebas en 05-funciones", () => {
  test("Debe de retornar un objeto", () => {
    const userTest = {
      uid: "ABC123",
      username: "El_Papi1502",
    };
    const user = getUser();
    // console.log(user);
    expect(user).toEqual(userTest);
  });

  // getUsuarioActivo

  test("getUsuarioActivo debe retornar un objeto", () => {
    const nombre = "Dani";

    const userTest = {
      uid: "ABC567",
      username: nombre,
    };
    const user = getUsuarioActivo( nombre );

    expect( userTest ).toEqual( user )
  });
});
