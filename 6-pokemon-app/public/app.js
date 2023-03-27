fetchPokemon();

async function fetchPokemon() {
    const response = await fetch('/api/pokemon');
    const pokemons = await response.json();
    console.log(pokemons);
    


document.querySelector('#pokemons').innerHTML = `
<div class="container">
<div class="item">
    ${pokemons.map(pokemon => `
    ${pokemon.name} <img src="https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg">` ) }
</div>
</div>
`
}