const pokemonName = document.getElementById("pokemonName")



function putPokemonInDom() {
    fetch('https://pokeapi.co/api/v2/pokemon/' + pokemonName.value)
        .then(response => {
            if (!response.ok) throw new Error('Network error');
            return response.json(); // Converts response body to a JSON object
        })
        .then(data => {
            
            // Use your data here
        })
        .catch(error => {
            //erorrismo
        }
        );
}