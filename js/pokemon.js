// function fetchdata(){
//     fetch('https://pokeapi.co/api/v2/pokemon?limit=1')
//     .then(res => res.json())
//     .then(function(allpokemon){
//         allpokemon.results.forEach(function(pokemon){
//             fetchPokemonData(pokemon);
//         });
//     })

//     function fetchPokemonData(pokemon){
//         let url = pokemon.url
//           fetch(url)
//           .then(response => response.json())
//           .then(function(pokeData){
//           console.log(pokeData)
//           })
//         }
// }

// fetchdata();
// async function pokeinfo(){

//     const url = `https://pokeapi.co/api/v2/pokemon?limit=11`
//     const result = await fetch(url).then((res)=>res.json())

//     console.log(result.results[10].url);

//     // justry.innerHtml
// }

// pokeinfo();

// let arr = [];
// let type = "grass";

// function fetchPokemonData(pokemon) {
//   let url = pokemon.url;
//   fetch(url)
//     .then((response) => response.json())
//     .then(function (pokeData) {
//       // console.log("lodu", pokeData);
//       arr.push(pokeData);
//       // console.log("aaru", arr);
//     });
// }

// async function pokeinfo() {
//   const url = `https://pokeapi.co/api/v2/pokemon`;
//   const response = await fetch(url)
//     .then((res) => res.json())
//     .then(function (allpokemon) {
//       allpokemon.results.forEach(function (pokemon) {
//         fetchPokemonData(pokemon);
//       });
//     });
// }
// pokeinfo();

// let newPoko = [];

// let newArr = arr.forEach((item) => {
//   item.types.forEach((it) => {
//     if (it.type.name === type) {
//       newPoko.push(item);
//     }
//   });
// });

// console.log("newPoko", newPoko);
// console.log("arr", arr);

var arr = [];
var newArr = [];

window.onload = () => {
  arr.forEach((item) => {
    item.types.forEach((it) => {
      if (it.type.name === "grass") {
        newArr.push(item);
        return;
      }
    });
  });

  if (newArr.length > 0) {
    mapPokemons();
  }
};
for (let i = 1; i <= 20; i++) {
  pokeinfo(i);
}
async function pokeinfo(num) {
  const url = `https://pokeapi.co/api/v2/pokemon/${num}`;
  const response = await fetch(url)
    .then((res) => res.json())
    .then((response) => arr.push(response));
}
// console.log("arrr", arr);

console.log("newPoko", newArr);

function mapPokemons() {
  let main = document.getElementById("main");
  main.innerHTML = "";
  newArr.length > 0 &&
    newArr.map((item) => {
      main.innerHTML += `
      <div class="typeofpokemon typeofpokemon1">
      <div class="logoname">
        <span class="nameoftype">${item.name}</span>
        <span>${item.id}</span>
        <span>${item.weight}</span>
        <div class="justry"></div>
      </div>
      <img
        class="electricpokemon"
        src="../images/electricpokemon.png"
        alt="electricpokemon"
      />
    </div> 
      `;
    });
}
