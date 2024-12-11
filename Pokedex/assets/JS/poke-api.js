
const pokeApi = {} // creating a new list

pokeApi.getPokemonDetail = (pokemon) => { // Show the details of pokemons for json
    return fetch(pokemon.url).then((response) => response.json())
}

pokeApi.getPokemons = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`
    
    return fetch(url)
       .then( (response)  => response.json()) //then is used to when reponse is true
       .then( (jsonBody) => jsonBody.results) //show the body of the document
       .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
       .then((detailRequests) => Promise.all(detailRequests)) // Request details was calling
       .then ((pokemonsDetails) => pokemonsDetails)
           
}