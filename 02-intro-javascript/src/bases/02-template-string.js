const nombre = 'Daniel'
const apellido = 'Frenández'


// const nombreCompleto = nombre + ' ' + apellido
const nombreCompleto = `${nombre} ${apellido}`

console.log(nombreCompleto)

function getSaludo( nombre ) {
  return `Hola ${nombre}`
}

console.log( `Este es un texto: ${ getSaludo(nombre) }` )
