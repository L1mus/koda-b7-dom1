const dataArrBttonTop = [
  "(",
  ")",
  "%",
  "AC",
  "7",
  "8",
  "9",
  ">:",
  "4",
  "5",
  "6",
  "x",
  "1",
  "2",
  "3",
  "-",
  "0",
  ".",
  "=",
  "+",
];

const dataArrBttonBottom = [
  "",
  "x!",
  "Inv",
  "sin",
  "ln",
  "π",
  "cos",
  "log",
  "e",
  "tan",
  "√",
  "Ans",
  "EXP",
  "x",
];

const body = document.body;
const div = document.createElement("div");
body.append(div);
div.setAttribute("class", "container-main");

const divCalculator = document.createElement("div");
divCalculator.setAttribute("class", "container-Calculator");
div.append(divCalculator);

const sectionTop = document.createElement("section");
sectionTop.setAttribute("class", "top-content");
divCalculator.append(sectionTop);

for (let i = 0; i < 20; i++) {
  sectionTop.append(document.createElement("button"));
}

const allTopButtons = sectionTop.querySelectorAll("button");

allTopButtons.forEach((value, i) => {
  value.textContent = `${dataArrBttonTop[i]}`;
});

const sectionBottom = document.createElement("section");
sectionBottom.setAttribute("class", "bottom-content");
divCalculator.append(sectionBottom);

for (let i = 0; i < 14; i++) {
  sectionBottom.append(document.createElement("button"));
}

const allBottomButtons = sectionBottom.querySelectorAll("button");

allBottomButtons.forEach((value, i) => {
  value.textContent = `${dataArrBttonBottom[i]}`;
});

allTopButtons[4].setAttribute("class", "number");
allTopButtons[5].setAttribute("class", "number");
allTopButtons[6].setAttribute("class", "number");
allTopButtons[8].setAttribute("class", "number");
allTopButtons[9].setAttribute("class", "number");
allTopButtons[10].setAttribute("class", "number");
allTopButtons[12].setAttribute("class", "number");
allTopButtons[13].setAttribute("class", "number");
allTopButtons[14].setAttribute("class", "number");
allTopButtons[18].setAttribute("class", "calculate");

allBottomButtons[0].setAttribute("class", "unit");

const span = (document.createElement("span").textContent = "Deg");
const span2 = (document.createElement("span").textContent = "|");
const span3 = (document.createElement("span").textContent = "Rad");

allBottomButtons[0].append(span, span2, span3);

const sup = (document.createElement("sup").textContent = "y");

console.log(sup);

allBottomButtons[13].append(sup);
