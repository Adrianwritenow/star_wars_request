// 1. First, find our UL Container
let characters = document.querySelector(".characters");

function displayCharacters () {

  let data = JSON.parse(this.responseText);
  let list =  '';
  data.results.forEach(function(aCharacter){
    list +=  `<li>{aCharacter.name}</li>`;

  });
  characters.innerHTML = list; 
}

// 2. Create our Ajax Request
let req = new XMLHttpRequest();
req.open("GET", "http://swapi.co/api/people/");
req.addEventListener("load", displayCharacters);
req.send();
