// We will cal pokemon API.
let pokemon = null
const pokemonImage = document.getElementById("pokemon-image")
const pokemonName = document.getElementById("pokemon-name")
const pokemonInfo = document.getElementById("pokemon-info")
const button = document.getElementById("submit")
const searchBox = document.getElementById("searchBox")

button.addEventListener("click", (e) => {
    id = searchBox.value
    pokemonImage.classList.remove("animation")

    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`,{
        method: "GET"
    }).then((res) => res.json().then(data => {
        pokemon = data
        pokemonImage.setAttribute("src", pokemon.sprites.front_default)
        pokemonName.innerText = pokemon.name
        pokemonInfo.innerHTML = `<span id = "height">Height: ${pokemon.height}</span><span id ="weight"> Weight: ${pokemon.weight}</span>`
        pokemonImage.classList.add("animation")

    }))
})



