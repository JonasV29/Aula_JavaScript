

const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`

fetch(url)
    .then( (response)  => response.json()) //then is used to when reponse is true
    .then( (jsonBody) => console.log(jsonBody)) //show the body of the document
    .catch( (error)=> console.log(error)) // catch is used to if have a problem

    