const persona = {
  nombre: 'Tony',
  apellido: 'Stark',
  edad: 45,
  direccion: {
    ciudad: 'New York',
    zip: 423423423,
    lat: 14.4444,
    lng: 36.234324,
  }

}

// console.table( persona )
console.log(persona)


const persona2 = { ...persona }
persona2.nombre = 'Peter'

console.log( persona2 )