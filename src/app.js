/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector(".randomCard").classList.add(randomSuit());
  document.querySelector(".randomCard").innerHTML = randomNumber();
  setInterval(() => {
    document.querySelector(".randomCard").classList.remove(randomSuit());
    document.querySelector(".randomCard").classList.add(randomSuit());
    document.querySelector(".randomCard").innerHTML = randomNumber();
  }, 10000);
};

let cardGenerator = document.querySelector(".cardGenerator");

cardGenerator.addEventListener("click", () => {
  document.querySelector(".randomCard").classList.remove(randomSuit());
  document.querySelector(".randomCard").classList.add(randomSuit());
  document.querySelector(".randomCard").innerHTML = randomNumber();
});

function randomNumber() {
  let number = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let indexNumber = Math.floor(Math.random() * number.length);
  return number[indexNumber];
}
function randomSuit() {
  let suit = ["spade", "club", "heart", "diamond"];
  let indexSuit = Math.floor(Math.random() * suit.length);
  return suit[indexSuit];
}
