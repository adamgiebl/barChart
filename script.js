"use strict";

const container = document.querySelector(".container");

const getNumberOfCustomers = () => {
  return Math.floor(Math.random() * 32);
};

const getColor = (value) => {
  const hue = 120 - value;
  return `linear-gradient(hsl(${hue - 20},100%, 50%), hsl(${hue},100%, 50%))`;
};

const bars = [];
const array = [];
for (let i = 0; i < 40; i++) {
  const div = document.createElement("div");
  div.classList.add("bar");
  const number = getNumberOfCustomers();
  div.style.height = number * 3 + "px";
  container.appendChild(div);
  array.push(number);
  bars.push(div);
}
console.log(array);

const renderBars = (array) => {
  for (let i = 0; i < array.length; i++) {
    const value = array[i] * 3;
    bars[i].style.background = getColor(value);
    bars[i].style.height = value + "px";
  }
};

setInterval(() => {
  const queueSize = getNumberOfCustomers();

  array.push(queueSize);

  if (array.length >= 40) {
    array.shift();
  }

  renderBars(array);
}, 1000);
