const pokemonList = document.getElementById('pokemonList') // get element by ID
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecords = 94
const limit = 10;
let offset = 0;

function myFunction() {  //when click the button, open a new tab
  window.open('power.html', '_blank')
}

function convertPokemonToLi(pokemon) {
  return `
      <li class="pokemon ${pokemon.type}">
          <span class="number">#${pokemon.number}</span>
          <span class="name">${pokemon.name}</span>

          <div class="detail">
              <ol class="types">
                  ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
              </ol>

              <img src="${pokemon.photo}"
                   alt="${pokemon.name}">
          </div>
      </li>
  `
}


function loadPokemonItens(offset, limit) {
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    const newHtml = pokemons.map(convertPokemonToLi).join('')
    pokemonList.innerHTML += newHtml
  })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click',() => { //after the click the offset and limit mix
 offset += limit

   const qtdRecordNexPage = offset + limit

  if(qtdRecordNexPage >= maxRecords) { //making a count to limit the list of pokemon
    const newLimit =  maxRecords - offset
    loadPokemonItens(offset,newLimit)

    loadMoreButton.parentElement.removeChild(loadMoreButton) // remove the button
 } else {
    loadPokemonItens(offset,limit)
 }
  
})

 
    

   