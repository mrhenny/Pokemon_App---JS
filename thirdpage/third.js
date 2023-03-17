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
//       console.log("aaru", arr);
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
var arr = [];

window.onload = () => {
  for (let i = 1; i <= 20; i++) {
    console.log("hi", i);
    pokeinfo(i);
  }
};

async function pokeinfo(num) {
  const url = `https://pokeapi.co/api/v2/pokemon/${num}`;
  const response = await fetch(url)
    .then((res) => res.json())
    .then((response) => arr.push(response));
}
console.log("arrr", arr);
