const inputTemprature = document.getElementById("temprature");
const convert = document.getElementById("converts");
const convertTo = document.getElementById("convertsTo");
const btnConvertion = document.getElementById("btn-convertion");
const output = document.getElementById("output");

const convertCelciusToAll = (value) => {
  resultF = (9 / 5) * value + 32;
  resultK = value + 273.15;
  resultR = 4 / 5 + value;

  return { fahrentheit: resultF, kelvin: resultK, reamur: resultR };
};

inputTemprature.onchange = (e) => {
  const answer = e.target.value;
  const { fahrentheit, kelvin, reamur } = convertCelciusToAll(answer);
  output.innerHTML = `
  <p>Fahrenheit : ${fahrentheit}</p>
  <p>Fahrenheit : ${kelvin}</p>
  <p>Fahrenheit : ${reamur}</p>`;
};
