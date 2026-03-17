const red = document.getElementById("red");
const yellow = document.getElementById("yellow");
const green = document.getElementById("green");

function runYellowLight() {
  setTimeout(() => {
    red.classList.remove("red");
    yellow.classList.add("yellow");
    runGreenLight();
  }, 3000);
}

function runGreenLight() {
  setTimeout(() => {
    green.classList.add("green");
    yellow.classList.remove("yellow");
    runRedLight();
  }, 2000);
}

function runRedLight() {
  setTimeout(() => {
    green.classList.remove("green");
    red.classList.add("red");
  }, 3000);
}

function trafficLight() {
  runYellowLight();
}

trafficLight();
