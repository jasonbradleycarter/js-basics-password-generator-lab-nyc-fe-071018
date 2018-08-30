// window.addEventListener("load", () => {
//   //start your code here
//   let outputResult = document.querySelector("output")
//   let lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz".split('')
//   let upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')
//   let numberCharacters = "0123456789".split('')
//   let specialCharacters = "!#$%&()*+,-./:;<=>?@[\\]^_{|}~".split('')

//   document.addEventListener('submit', (event) => {
//     // stay on the same page
//     event.preventDefault();
    
//     let input = document.getElementById("passwordLength")
//     let passwordLength = input.value
//     if (passwordLength < 4) {
//       passwordLength = 4
//     }
//     let newPassword = ""
//     for (let i = 0; i < passwordLength;) {
//       if (i < passwordLength) {
//       newPassword += lowerCaseCharacters[Math.floor(Math.random() * lowerCaseCharacters.length)]
//         i++
//       }
//       if (i < passwordLength) {
//       newPassword += upperCaseCharacters[Math.floor(Math.random() * upperCaseCharacters.length)]
//         i++
//       }
//       if (i < passwordLength) {
//       newPassword += numberCharacters[Math.floor(Math.random() * numberCharacters.length)]
//         i++
//       }
//       if (i < passwordLength) {
//       newPassword += specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
//         i++
//       }
      
//     }
//   outputResult.innerHTML = newPassword
//   })
  
// })


const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz".split("");
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const numbers = "0123456789".split("");
const specialCharacters = "!#$%&()*+,-./:;<=>?@[\\]^_{|}~".split("");
const allCharacters = lowercaseLetters
  .concat(uppercaseLetters)
  .concat(numbers)
  .concat(specialCharacters);

window.addEventListener("load", () => {
  document.addEventListener('submit', handleSubmit)
});

function handleSubmit(e) {
  e.preventDefault();
  let passwordLength = parseInt(
    document.querySelector("#passwordLength").value
  );

  if (passwordLength < 4 || !passwordLength ) passwordLength = 4;



  passwordLength
    ? appendOutput(generatePassword(passwordLength))
    : appendOutput("Please enter a valid password length");
}

function generatePassword(length) {
  let password = "";
  password +=
    lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)];
  password +=
    uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password +=
    specialCharacters[Math.floor(Math.random() * specialCharacters.length)];

  while (password.length < length) {
    password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
  }

  return password;
}

function appendOutput(password) {
  document.querySelector("output").innerText = password;
}