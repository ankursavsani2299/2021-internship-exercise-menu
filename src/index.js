import "./styles.css";
import menu from "./menu";

const menuItems = menu.items;

console.log(menuItems);

DisplayAllStarter();
DisplayAllPasta();
DisplayAllPizza();

function DisplayAllStarter() {
  const starter = document.querySelector("#starters");

  let arr = [];
  for (let i = 0; i < menuItems.length; i++) {
    if (menuItems[i].type === "starters") {
      arr.push(menuItems[i]);
      arr.sort((a, b) => {
        return a.menuOrder - b.menuOrder;
      });
    }
  }
  starter.innerHTML = "";
  starter.innerHTML += `<h2>Starter</h2>`;

  for (let j = 0; j < arr.length; j++) {
    if (arr[j].spicy === true) {
      starter.innerHTML += `<p class="spicy">Name: ${arr[j].name} </p>`;
    } else {
      starter.innerHTML += `<p>Name: ${arr[j].name} </p>`;
    }
    starter.innerHTML += `<p>Description: ${arr[j].description}</p>
                          <p>Price: $${countDecimals(arr[j].price)}</p><br>`;
  }
}

function DisplayAllPasta() {
  const pasta = document.querySelector("#pasta");

  let arr = [];
  for (let i = 0; i < menuItems.length; i++) {
    if (menuItems[i].type === "pasta") {
      arr.push(menuItems[i]);
      arr.sort((a, b) => {
        return a.menuOrder - b.menuOrder;
      });
    }
  }
  pasta.innerHTML = "";
  pasta.innerHTML += `<h2>Pasta</h2>`;

  for (let j = 0; j < arr.length; j++) {
    if (arr[j].spicy === true) {
      pasta.innerHTML += `<p class="spicy">Name: ${arr[j].name} </p>`;
    } else {
      pasta.innerHTML += `<p>Name: ${arr[j].name} </p>`;
    }
    pasta.innerHTML += `<p>Description: ${arr[j].description}</p>
                          <p>Price: $${countDecimals(arr[j].price)}</p><br>`;
  }
}

function DisplayAllPizza() {
  const pizza = document.querySelector("#pizza");

  let arr = [];
  for (let i = 0; i < menuItems.length; i++) {
    if (menuItems[i].type === "pizza") {
      arr.push(menuItems[i]);
      arr.sort((a, b) => {
        return a.menuOrder - b.menuOrder;
      });
    }
  }
  pizza.innerHTML = "";
  pizza.innerHTML += `<h2>Pizza</h2>`;

  for (let j = 0; j < arr.length; j++) {
    if (arr[j].spicy === true) {
      pizza.innerHTML += `<p class="spicy">Name: ${arr[j].name} </p>`;
    } else {
      pizza.innerHTML += `<p>Name: ${arr[j].name} </p>`;
    }
    pizza.innerHTML += `<p>Description: ${arr[j].description}</p>
                          <p>Price: $${countDecimals(arr[j].price)}</p><br>`;
  }
}

function RemoveSpicyFromStarter() {
  const starter = document.querySelector("#starters");

  starter.innerHTML = "";
  starter.innerHTML += `<h2>Starter</h2>`;
  let arr = [];
  for (let i = 0; i < menuItems.length; i++) {
    if (menuItems[i].type === "starters") {
      arr.push(menuItems[i]);
      arr.sort((a, b) => {
        return a.menuOrder - b.menuOrder;
      });
    }
  }
  for (let j = 0; j < arr.length; j++) {
    if (arr[j].spicy === false) {
      starter.innerHTML += `<p>Name: ${arr[j].name} </p>
                          <p>Description: ${arr[j].description}</p>
                          <p>Price: $${countDecimals(arr[j].price)} </p><br>`;
    }
  }
}

function RemoveSpicyFromPasta() {
  const pasta = document.querySelector("#pasta");

  pasta.innerHTML = "";
  pasta.innerHTML += `<h2>Pasta</h2>`;
  let arr = [];
  for (let i = 0; i < menuItems.length; i++) {
    if (menuItems[i].type === "pasta") {
      arr.push(menuItems[i]);
      arr.sort((a, b) => {
        return a.menuOrder - b.menuOrder;
      });
    }
  }
  for (let j = 0; j < arr.length; j++) {
    if (arr[j].spicy === false) {
      pasta.innerHTML += `<p>Name: ${arr[j].name} </p>
                          <p>Description: ${arr[j].description}</p>
                          <p>Price: $${countDecimals(arr[j].price)} </p><br>`;
    }
  }
}

function RemoveSpicyFromPizza() {
  const pizza = document.querySelector("#pizza");

  pizza.innerHTML = "";
  pizza.innerHTML += `<h2>Pizza</h2>`;
  let arr = [];
  for (let i = 0; i < menuItems.length; i++) {
    if (menuItems[i].type === "pizza") {
      arr.push(menuItems[i]);
      arr.sort((a, b) => {
        return a.menuOrder - b.menuOrder;
      });
    }
  }
  for (let j = 0; j < arr.length; j++) {
    if (arr[j].spicy === false) {
      pizza.innerHTML += `<p>Name: ${arr[j].name} </p>
                          <p>Description: ${arr[j].description}</p>
                          <p>Price: $${countDecimals(arr[j].price)} </p><br>`;
    }
  }
}

const spicyCheckBox = document.querySelector("footer ul li");

spicyCheckBox.innerHTML += `<input id="checkbox" type="checkbox" value="Spicy" checked="checked">`;

function countDecimals(value) {
  let check = value.toString().split(".")[1].length;
  if (check === 1) {
    check = value + "0";
    return check;
  } else {
    return value;
  }
}

document.getElementById("checkbox").onchange = myFunction;

function myFunction() {
  let checkBoxValue = document.getElementById("checkbox");
  if (checkBoxValue.checked === true) {
    DisplayAllStarter();
    DisplayAllPasta();
    DisplayAllPizza();
  } else {
    RemoveSpicyFromStarter();
    RemoveSpicyFromPizza();
    RemoveSpicyFromPasta();
  }
}