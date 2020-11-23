// const { heroes } = require("./data/heroes")
import heroes, { owners } from "../data/heroes";

const getHeroesById = (id) => heroes.find((el) => el.id === id);
console.log(getHeroesById(2));

const getHeroesByOwner = (owner) => heroes.filter((el) => el.owner === owner);

console.log(getHeroesByOwner("Marvel"));

console.log( owners )


