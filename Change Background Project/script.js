"use strict";

let colors = ["red", "blue", "green", "orange", "pink", "black", "white"];

document.getElementById("btn").addEventListener("click", function () {
  document.body.style.backgroundColor =
    colors[Math.floor(Math.random() * colors.length)];
});
