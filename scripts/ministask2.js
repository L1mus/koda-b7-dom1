const red = document.getElementById("red");
const yellow = document.getElementById("yellow");
const green = document.getElementById("green");

function runYellowLight() {
  return new Promise((resolve) => {
    setTimeout(() => {
      red.classList.remove("red");
      yellow.classList.add("yellow");
      resolve("berhasil");
    }, 3000);
  });
}

function runGreenLight() {
  return new Promise((resolve) => {
    setTimeout(() => {
      yellow.classList.remove("yellow");
      green.classList.add("green");
      resolve("berhasil");
    }, 2000);
  });
}

function runRedLight() {
  return new Promise((resolve) => {
    setTimeout(() => {
      green.classList.remove("green");
      red.classList.add("red");
      resolve("berhasil");
    }, 3000);
  });
}

async function trafficLight() {
  await runYellowLight();
  await runGreenLight();
  await runRedLight();
}

trafficLight();
