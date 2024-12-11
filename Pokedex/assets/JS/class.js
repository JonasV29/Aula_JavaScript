const pokemonList = document.getElementById('pokemonList') // get element by ID
const loadMoreButton = document.getElementById('loadMoreButton')

function convertPokemonToLi(pokemon) {
    return `
            <li class="pokemon ${pokemon.type}"> 
                <span class="number">#${pokemon.number}</span> <br/>
                <span class="name">${pokemon.name}</span>
                <div class="detail">
                    <ol class="types">
                      ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join(" ")}
                    </ol>
                    
                    <img  src="${pokemon.photo}" 
                    alt="${pokemon.name}">
                </div> 
            </li>  
          `
}

function loadPokemonItens(){
  pokeApi.getPokemons().then((pokemons = []) => {
    const newHtml = pokemons.map( convertPokemonToLi).join('')
    pokemonList.innerHTML += newHtml
  })
}

 
    

   