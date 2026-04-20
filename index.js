const pokemonName = document.getElementById("pokemonName")
const displayNombre = document.getElementById("Nombre")
const displayMensaje = document.getElementById("message")
const imagen = document.getElementById("Imagen")
const back = document.getElementById("ImagenAtras")
const tipo = document.getElementById("Tipo")
const peso = document.getElementById("Peso")
const altura = document.getElementById("Altura")



function putPokemonInDom() {
    const fetchUrl='https://pokeapi.co/api/v2/pokemon/' + pokemonName.value
    displayMensaje.innerHTML = "loading..."
    fetch(fetchUrl)
        .then(response => {
            if (!response.ok) throw new Error('Network error');
            return response.json(); // Converts response body to a JSON object
        })
        .then(data => {
            displayMensaje.innerHTML = ""
            displayNombre.innerHTML = "Nombre del pokemon: " + data.forms[0].name
            imagen.src = data.sprites.front_default;
            back.src = data.sprites.back_default
            tipo.innerHTML = "Type/s: "
            for(let element of data.types){
                tipo.innerHTML+=element.type.name + " "
            }
            peso.innerHTML = "Peso: "+data.weight+"g"
            altura.innerHTML = "Altura: "+data.height+"cm"
            // Use your data here
        })
        .catch(error => {
            displayMensaje.innerHTML = "ERROR!"
            displayNombre.innerHTML = ""
            imagen.src = ""
            back.src = ""
            tipo.innerHTML = ""
            peso.innerHTML = ""
            altura.innerHTML = ""
            //erorrismo
        }
        );
}