

const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`

function convertPokemonToLi(pokemon) {
    return `
            <li class="pokemon"> 
                <span class="number">#0001</span> <br/>
                <span class="name">${pokemon.name}</span>
                <div class="detail">
                    <ol class="types">
                      <li class="type">Grass</li>
                      <li class="type">Poison</li>
                    </ol>
                    <img  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" 
                    alt="${pokemon.name}">
                </div>
                
            </li>  `
}

const pokemonList = document.getElementById('pokemonList') // get element by ID

fetch(url)
    .then( (response)  => response.json()) //then is used to when reponse is true
    .then( (jsonBody) => jsonBody.results) //show the body of the document
    .then((pokemonLi) => {
        for (let i= 0; i< pokemonLi.length; i++) {
            const pokemon = pokemonLi[i];
              pokemonList.innerHTML += convertPokemonToLi(pokemon) // change the list
            
            
        }
    })
    .catch( (error)=> console.log(error)) // catch is used to if have a problem

   