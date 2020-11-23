// Funciones
const saludar = (nombre) => {
  return `Hola, ${nombre}`;
};

const saludar2 = (nombre) => `Hola, ${nombre}`;

console.log(saludar("Goku"));
console.log(saludar2("Goku"));

const getUser = () => ({
  uId: "Ansadfg1234",
  userName: "Coco",
});

console.log(getUser());

//Tarea
const getUsuarioActivo = (nombre) => ({
  uId: "337fd627",
  username: nombre,
});

console.log(getUsuarioActivo("Pedro"));
