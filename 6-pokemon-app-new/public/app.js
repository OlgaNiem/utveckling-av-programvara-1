const pokemonList = document.getElementById('pokemonList');
    const searchInput = document.getElementById('search');
    const searchBtn = document.getElementById('searchBtn');
    const sortBySelect = document.getElementById('sortBy');
    const sortBtn = document.getElementById('sortBtn');

    // Sök 
    searchBtn.addEventListener('click', () => {
      const searchTerm = searchInput.value.trim();
      getPokemon(searchTerm);
    });

    // Sortera
    sortBtn.addEventListener('click', () => {
      const sortBy = sortBySelect.value;
      const searchTerm = searchInput.value.trim();
      getPokemon(searchTerm, sortBy);
    });

    // Hämta Pokemon från API
    function getPokemon(searchTerm, sortBy) {
      let url = '/api/pokemon';
      let params = [];

      if (searchTerm) {
        params.push(`search=${searchTerm}`);;
      }
      if (sortBy) {
        params.push(`sortBy=${sortBy}`);
      }

      if (params.length > 0) {
        url += `?${params.join('&')}`;
      }

      fetch(url)
        .then(response => response.json())
        .then(data => {
          displayPokemon(data);
        })
        .catch(error => {
          console.error('Error fetching data', error);
        });
    }

    // Visa Pokemon i browser
    function displayPokemon(data) {
      pokemonList.innerHTML = '';

      if (data.length === 0) {
        pokemonList.innerHTML = 'No Pokemon found.';
        return;
      }

      data.forEach(pokemon => {
    const pokemonDiv = document.createElement('div');
    pokemonDiv.classList.add('item'); 
    pokemonDiv.innerHTML = `
      <h3 class="pokemon-name">${pokemon.name}</h3>
      <p>Base experience: ${pokemon.base_experience}</p>
      <p>Height: ${pokemon.height}</p>
      <p>Weight: ${pokemon.weight}</p>
      <img src="https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg" alt="${pokemon.name}">
    `;
        pokemonList.appendChild(pokemonDiv);
      });
    }

    
    getPokemon();