const personajes = ["Goku", "Vegeta", "Trunks"];

const [, p2] = personajes;

console.log(p2);


const retornaArreglo = () => {
  return ['ABC', 123]
}

const [letras, numeros] = retornaArreglo()
console.log( letras, numeros )


// Tarea

const use = ( valor ) => {
  return [ valor, () => { console.log('Hola mundo') } ]
}

const arr = use( 'Goku' )

console.log( arr )
const [ nombre, setNombre ] = use( 'Goku' )

console.log( nombre, setNombre)
setNombre()