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