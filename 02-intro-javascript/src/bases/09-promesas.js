import { getHeroesById } from "./bases/08-importar-exportar";

// const promesa = new Promise( (resolve, reject) => {
//   setTimeout( () => {
//     // Tarea
//     const p1 = getHeroesById(2)

//     resolve(p1)
//     // reject('No se pudo encontrar el héroe')
//   }, 2000)

// })

// promesa.then( ( heroe ) => {
//   console.log('then de la promesa', heroe)
// })
// .catch(err => {
//   console.warn( err )
// })

const getHeroesByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Tarea
      const p1 = getHeroesById(id);

      if(p1){
        resolve(p1);
      } else{
        reject('No se pudo encontrar el héroe')
      }

    }, 2000);
  });
};

getHeroesByIdAsync(10).then((heroe) => {
  console.log("Heroe: ", heroe);
}).catch( console.warn )
