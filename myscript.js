



window.onload = function() {
	

 fetchKantoPokemon();
};





	
function fetchKantoPokemon() {
 fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  .then(response => response.json())
  .then(function(allpokemon){
  allpokemon.results.forEach(function(data){
    createKantoPokemonProfile(data); 
  });
 });
}

function createKantoPokemonProfile(data){
let url = data.url; 
  fetch(url)
  .then(response => response.json())
  .then(function(pokemonData){
  getPokemon(pokemonData)
  });
  
}

function getPokemon(pokemonData){
	console.log(pokemonData);
    let allPokemonContainer = document.getElementById('poke-container');
    let pokeContainer = document.createElement("div") 
    pokeContainer.classList.add('ui', 'card');

     

    let pokemonName = document.createElement('h4') 
    pokemonName.innerText = pokemonData.name

    let pokemonNumber = document.createElement('p')
    pokemonNumber.innerText = `#${pokemonData.id}`
   
    let pokemonTypes = document.createElement('ul') 
  
  let pokemonImgContainer = document.createElement('div')
    pokemonImgContainer.classList.add('image')

    let pokemonImage = document.createElement('img')
    pokemonImage.srcset = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonData.id}.png`

  


    createTypes(pokemonData.types, pokemonTypes) 

    pokeContainer.append(pokemonName, pokemonNumber, pokemonTypes,pokemonImage);   
    allPokemonContainer.appendChild(pokeContainer);                                                        
}
	
function createTypes(types, ul){
  types.forEach(function(type){
  let typeLi = document.createElement('li');
  typeLi.innerText = type['type']['name'];
  ul.append(typeLi)
  })
}


