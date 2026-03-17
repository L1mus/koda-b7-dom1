const body = document.body;
const main = document.createElement("main");
const h1 = (document.createElement("h1").textContent = "FORM SURVEY ROKOK");
const divName = document.createElement("div");
const divAge = document.createElement("div");
const divSelection = document.createElement("div");
const divCheckBox = document.createElement("div");
const form = document.createElement("form");
const labelName = document.createElement("label");
const labelAge = document.createElement("label");
const labelGender = document.createElement("label");
const labelGenderM = document.createElement("label");
const labelGenderF = document.createElement("label");
const inputName = document.createElement("input");
const inputAge = document.createElement("input");
const inputGender = document.createElement("input");
const bName = (document.createElement("b").textContent = "Nama");
const bAge = (document.createElement("b").textContent = "Umur");
const bGender = (document.createElement("b").textContent = "Jenis Kelamin");

labelName.setAttribute("for", "name");
inputName.setAttribute("type", "text");
inputName.setAttribute("name", "name");
inputName.setAttribute("id", "name");

labelAge.setAttribute("for", "age");
inputAge.setAttribute("type", "number");
inputAge.setAttribute("name", "age");
inputAge.setAttribute("id", "age");

// labelAge.setAttribute("for", "age");
inputGender.setAttribute("type", "radio");
inputGender.setAttribute("name", "gender");
inputGender.setAttribute("id", "gender");

body.appendChild(main);
main.append(h1, form);
form.append(divName, divAge, divSelection, divCheckBox);
divName.append(labelName, inputName);
divAge.append(labelAge, inputAge);
divSelection.append(labelGender);
labelName.append(bName);
labelAge.append(bAge);
labelGender.append(bGender);
