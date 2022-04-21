"use strict";
const body = document.querySelector("body");
const timeLog = document.querySelector(".time-log");
const container = document.querySelector("#clock");

const now = new Date();
const option = {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
};

setInterval(() => {
  const now = new Date();
  const option = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  timeLog.textContent = new Intl.DateTimeFormat(
    navigator.language,
    option
  ).format(now);

  let randomInt = (max, min) =>
    Math.trunc(Math.random() * (max - min + 1) + min);

  document.querySelector(".container").style.backgroundColor = `rgb(${randomInt(
    0,
    255
  )},${randomInt(0, 255)},${randomInt(0, 255)})`;
}, 1000);

const p = container.querySelector("p");

const onDrag = (e) => {
  //   let getStyle = window.getComputedStyle(container);
  let left = parseInt(e.pageX);
  let top = parseInt(e.pageY);
  container.style.left = `${left}px`;
  container.style.top = `${top}px`;
};

p.addEventListener("mousedown", function () {
  p.addEventListener("mousemove", onDrag);
});
p.addEventListener("mouseup", function () {
  p.removeEventListener("mouseup", onDrag);
});
