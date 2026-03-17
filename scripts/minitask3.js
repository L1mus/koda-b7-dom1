const body = document.body;
const main = document.createElement("main");
const h1 = (document.createElement("h1").textContent = "FORM SURVEY ROKOK");
const divName = document.createElement("div");
const divAge = document.createElement("div");
const divSelection = document.createElement("div");
const breakLn = document.createElement("br");
const divOption = document.createElement("div");
const divCheckBox = document.createElement("div");
const form = document.createElement("form");
const labelName = document.createElement("label");
const labelAge = document.createElement("label");
const labelGender = document.createElement("label");
const labelGenderM = (document.createElement("label").textContent = "Pria");
const labelGenderF = document.createElement("label");
const labelSmoker = document.createElement("label");
const labelChecbox = document.createElement("label");
const labelDjarumSuper = (document.createElement("label").textContent =
  "Djarum Super");
const labelDjiSamSoe = (document.createElement("label").textContent =
  "Dji Sam Soe");
const labelMalboro = (document.createElement("label").textContent = "Malboro");
const inputName = document.createElement("input");
const inputAge = document.createElement("input");
const inputGender = document.createElement("input");
const inputGenderM = document.createElement("input");
const inputGenderF = document.createElement("input");
const inputDjarumSuper = document.createElement("input");
const inputDjiSamSoe = document.createElement("input");
const inputMalboro = document.createElement("input");
const selectOption = document.createElement("select");
const optionYes = document.createElement("option");
const optionNo = document.createElement("option");
const bName = (document.createElement("b").textContent = "Nama");
const bAge = (document.createElement("b").textContent = "Umur");
const bGender = (document.createElement("b").textContent = "Jenis Kelamin");
const bOption = (document.createElement("b").textContent =
  "Apakah anda seorang Perokok ?");
const bCheckbox = (document.createElement("b").textContent =
  "Brand rokok yang di gunakan ?");

labelName.setAttribute("for", "name");
inputName.setAttribute("type", "text");
inputName.setAttribute("name", "name");
inputName.setAttribute("id", "name");

labelAge.setAttribute("for", "age");
inputAge.setAttribute("type", "number");
inputAge.setAttribute("name", "age");
inputAge.setAttribute("id", "age");

inputGender.setAttribute("type", "radio");
inputGender.setAttribute("name", "gender");
inputGender.setAttribute("id", "gender");
inputGenderM.setAttribute("id", "L");
inputGenderM.setAttribute("type", "radio");
inputGenderM.setAttribute("name", "gender");
inputGenderF.setAttribute("id", "P");
inputGenderF.setAttribute("type", "radio");
inputGenderF.setAttribute("name", "gender");
inputDjarumSuper.setAttribute("type", "checkbox");
inputDjiSamSoe.setAttribute("type", "checkbox");
inputMalboro.setAttribute("type", "checkbox");

labelSmoker.setAttribute("for", "smoking-dude");
selectOption.setAttribute("name", "smoker");
selectOption.setAttribute("id", "smoker-dude");
optionYes.setAttribute("value", "yes");
optionNo.setAttribute("value", "No");
optionYes.textContent = "yes";
optionNo.textContent = "no";

body.appendChild(main);
main.append(h1, form);
form.append(divName, divAge, divSelection, divOption, divCheckBox);
divName.append(labelName, inputName);
divAge.append(labelAge, inputAge);
divSelection.append(
  labelGender,
  inputGender,
  inputGender,
  labelGenderM,
  inputGenderF,
  labelGenderF,
);
labelName.append(bName);
labelAge.append(bAge);
labelGender.append(bGender);

divOption.append(labelSmoker, breakLn, selectOption);
labelSmoker.append(bOption);
selectOption.append(optionYes, optionNo);

divCheckBox.append(
  labelChecbox,
  breakLn,
  inputDjarumSuper,
  labelDjarumSuper,
  inputDjiSamSoe,
  labelDjiSamSoe,
  inputMalboro,
  labelMalboro,
);
labelChecbox.append(bCheckbox);
