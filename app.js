// POKEDEX PROJECT

const pokeContainer = document.querySelector(`#container`);
// The total number of pokemon in the PokéAPI we will be using (150)
const numOfPokemon = 150;

// The createPokeCard function creates a new card -- aka new section element -- and adds the card to the webpage inside of the div with the id of 'container'
// NOTE: The value/argument that will be passed in for the 'pokemon' parameter will be the response received from an Axios request to the PokeAPI
function createPokeCard(pokemon) {
    const pokeCard = document.createElement(`section`); // <-- creates new section element
    pokeCard.classList.add(`pokemon`); // <-- adds `pokemon` class to element
    pokeContainer.append(pokeCard); // <-- adds pokeCard to the page
    // Setting the innerHTML for the new card using the data that is passed into the 'pokemon'. Also, using the 'toUpperCase' on Pokemon name so it will display in all caps
    pokeCard.innerHTML = `
    <div class="img-container">
        <img src="${pokemon.data.sprites.front_shiny}" alt"${pokemon.data.name}">
    </div>
    <h3 class="name">${pokemon.data.name.toUpperCase()}</h3>
    `;
};

// The getPokemonData function makes an Axios GET request to the PokeAPI using a specific pokemon ID and takes the returned data and passes it into the createPokeCard function
// NOTE: The argument passed into the ID parameter will be a number created in the loop in the next function -- AKA the getPokemon function
async function getPokemonData(id) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const pokemonData = await axios.get(url);
    console.log(pokemonData);
    console.log(pokemonData.data.sprites.front_shiny);
    console.log(pokemonData.data.name);
    createPokeCard(pokemonData);
}

// The getPokemon function loops through all the pokemon IDs and runs/executes the getPokemonData function for each id 
// NOTE: Using async/await on this function because the code in the getPokemonData function is asychronous (there is an Axios request within that function)
async function getPokemon() {
    for(i = 1; i <= numOfPokemon; i++){
        await getPokemonData(i);
    }
}

getPokemon();