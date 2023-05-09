fetchPokemon();
fetchSelectedValue();

async function fetchPokemon() {
    const response = await fetch('/api/pokemon');
    const pokemons = await response.json();
    displayData(pokemons);
}

function displayData(pokemons) {
    //const a = document.createElement('a');
   //a.href = `/${pokemons.id}`
    //a.append(pokemons.name)
    document.querySelector('#pokemons').innerHTML = `
<div class="grid">
<div class="item">
    ${pokemons.map(pokemon => `
    ${pokemon.name} <img src="https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg">
    `)}
</div>
</div>
`
}


 async function getSelectValue(select){
    console.log(select)
    const response = await fetch(`/api/pokemon/${height}`);
    const pokemons = await response.json();

    var getSelectValue = document.querySelector('#select').value;
    console.log(pokemons);
    displayData(pokemons);
 }

 async function fetchSelectedValue() {
    const response = await fetch('/api/pokemon/:select');
    const pokemons = await response.json();
    console.log(pokemons)
 }

