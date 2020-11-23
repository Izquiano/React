// Desestructuración

const persona = {
  nombre: "Tony",
  edad: 45,
  clave: "Ironman",
  rango: "Soldado",
};

const { nombre } = persona;

console.log(nombre);

const retornaPersona = ({ nombre, edad, rango = "Capitan" }) => {
  // console.log( nombre, edad, rango )
  return {
    nombreClave: rango,
    anios: edad,
    latlng: {
      lat: 3.23424,
      lng: 34.234234
    }
  };
};

const { nombreClave, anios, latlng:{lat, lng} } = retornaPersona(persona);

retornaPersona(persona);

console.log(nombreClave, anios);
console.log( lat, lng )
