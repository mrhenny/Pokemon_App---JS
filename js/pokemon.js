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
