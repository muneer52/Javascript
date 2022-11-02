const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let randomPasswordOneEl = document.querySelector("#randomPasswordOne-el");
let randomPasswordTwoEl = document.querySelector("#randomPasswordTwo-el");
let randomPasswordOneMREl = document.querySelector("#randomPasswordOneMR-el");
let randomPasswordTwoMREl = document.querySelector("#randomPasswordTwoMR-el");
let btnGeneratePassword = document.querySelector("#generatePassword");

let lenghtPwd = document.querySelector("#lenghtPwd");
let isSymbol = document.querySelector("#isSymbol");
let isNumber = document.querySelector("#isNumber");

function randomPassword() {
  let generatePassword = "";
  let filterChar = [];

  if (isNumber.checked === false && isSymbol.checked === true) {
    // console.log(isSymbol.checked)
    filterChar = [];
    filterChar = characters.filter((item) => isNaN(item));
  } else if (isSymbol.checked === false && isNumber.checked === true) {
    filterChar = [];
    filterChar = characters.filter((item) =>
      item.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>{}\[\]\\\/]/gi, "")
    );
  } else if (isNumber.checked === false && isSymbol.checked === false) {
    filterChar = [];
    filterChar = characters.filter((item) => isNaN(item));
    filterChar = filterChar.filter((item) => item.replace(/[^\w ]/g, ""));
  } else {
    filterChar = characters;
  }

  for (let i = 0; i < lenghtPwd.value; i++) {
    generatePassword +=
      filterChar[Math.floor(Math.random() * filterChar.length)];
  }

  //console.log(filterChar);
  return generatePassword;
}

generatePassword.addEventListener("click", function () {
  //   console.log(lenghtPwd.value);

  if (lenghtPwd.value >= 5) {
    randomPasswordOneEl.value = randomPassword();
    randomPasswordTwoEl.value = randomPassword();
  } else {
    alert("Minimum password length should be 5");
  }
});

function copyToClipboard(e) {
  let value = e.value;

  navigator.clipboard.writeText(value);
  alert("copied to clipboard");
}
