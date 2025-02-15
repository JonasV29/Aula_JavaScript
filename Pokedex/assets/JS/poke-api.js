
const pokeApi = {} // creating a new list

function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name

    const types =  pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => { // Show the details of pokemons for json
    return fetch(pokemon.url)
           .then((response) => response.json())
           .then(convertPokeApiDetailToPokemon)
}

pokeApi.getPokemons = (offset = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`
    
    return fetch(url)
       .then( (response)  => response.json()) //then is used to when reponse is true
       .then( (jsonBody) => jsonBody.results) //show the body of the document
       .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
       .then((detailRequests) => Promise.all(detailRequests)) // Request details was calling
       .then ((pokemonsDetails) => pokemonsDetails)
           
}