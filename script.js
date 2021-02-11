"use strict";

const getNumberOfCustomers = () => {
  return Math.floor(Math.random() * 32);
};

const getColor = (value) => {
  const hue = 120 - value;
  return `linear-gradient(hsl(${hue - 20},100%, 50%), hsl(${hue},100%, 50%))`;
};

const traslateValue = (value) => value * 3;

const updateBar = (bar, value) => {
  const ajdustedValue = traslateValue(value);
  bar.style.background = getColor(ajdustedValue);
  bar.style.height = ajdustedValue + "px";
};

const createBar = (value) => {
  const div = document.createElement("div");
  div.classList.add("bar");
  div.style.height = value * 3 + "px";
  return div;
};

const generateInitialBars = (
  container,
  containerReflection,
  bars,
  bars2,
  values
) => {
  for (let i = 0; i < 40; i++) {
    const value = getNumberOfCustomers();
    const bar = createBar(value);
    const bar2 = createBar(value);
    container.appendChild(bar);
    containerReflection.appendChild(bar2);
    values.push(value);
    bars.push(bar);
    bars2.push(bar2);
  }
};

const updateBars = (bars, values) => {
  for (let i = 0; i < values.length; i++) {
    updateBar(bars[i], values[i]);
  }
};

const runUpdateLoop = (bars, bars2, values, outerContainer) => {
  outerContainer.addEventListener("animationiteration", () => {
    const queueSize = getNumberOfCustomers();

    values.push(queueSize);

    if (values.length >= 40) {
      values.shift();
    }

    updateBars(bars, values);
    updateBars(bars2, values);
  });
};

function init() {
  const container = document.querySelector(".container");
  const containerReflection = document.querySelector(".container-reflection");
  const bars = [];
  const bars2 = [];
  const values = [];

  generateInitialBars(container, containerReflection, bars, bars2, values);

  runUpdateLoop(bars, bars2, values, container);
}

init();
