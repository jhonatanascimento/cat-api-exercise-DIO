let BASE_URL = `https://pokeapi.co/api/v2/pokemon/35/`;
const changePokemon = document.getElementById("change-pokemon");
const pokemonName = document.getElementById("pokemon-name");
const pokemonSprite = document.getElementById("pokemon-sprite");

const getPokemonImage = async () => {
  try {
    const data = await fetch(BASE_URL);
    const json = await data.json();

    return json.sprites.front_default;
  } catch (e) {
    console.log(e.message);
  }
};

const getPokemonName = async () => {
  try {
    const data = await fetch(BASE_URL);
    const json = await data.json();

    return json.species.name;
  } catch (e) {
    console.log(e.message);
  }
};

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const loadImg = async () => {
  BASE_URL = `https://pokeapi.co/api/v2/pokemon/${getRandomIntInclusive(
    1,
    150
  )}/`;
  pokemonSprite.src = await getPokemonImage();
  pokemonName.textContent = await getPokemonName();
};

changePokemon.addEventListener("click", loadImg);

loadImg();
