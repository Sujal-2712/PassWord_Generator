const number = "1234567890";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const symbol = "!@#$%^&*?*";

const passwordTxt = document.getElementById("output");
// const len = document.getElementById("length");
// console.log(len);
const incUpperCase = document.getElementById("upperSet");
const incLowerCase = document.getElementById("lowerSet");
const incNumbers = document.getElementById("numberSet");
const incSymbols = document.getElementById("symbolSet");
const generateBtn = document.getElementById("generateBtn");

let len = document.getElementById("length");
let output = document.getElementById("demo");
output.innerHTML = len.value;
len.oninput = function() {
  output.innerHTML = this.value;
}

function generatePassword(length, characters, characters2) {
  if(length>25)
  {
      let val="MAXIMUM LIMIT IS 25";
      return val;
  }
  if(length<8)
  {
      let val="MINIMUM LIMIT IS 8";
      return val;
  }
  let password = "";

  for (let i = 0; i < length / 2; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
    password += characters2.charAt(
      Math.floor(Math.random() * characters2.length)
    );
  }
  if (length % 2 != 0) {
    password = password.slice(0, -1);
  }
  return password;
}

generateBtn.addEventListener("click", () => {
  let char = "";
  let char2 = "";
  if (incUpperCase.checked) {
    char += uppercase;
  }
  if (incLowerCase.checked) {
    char += lowercase;
  }
  if (incNumbers.checked) {
    char2 += number;
  }
  if (incSymbols.checked) {
    char2 += symbol;
  }
  if(char2==""){
    char2=char;
  }
  if(char==""){
    char=char2;
  }
  passwordTxt.value = generatePassword(len.value, char, char2);
});
