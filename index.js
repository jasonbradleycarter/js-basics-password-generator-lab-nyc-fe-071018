window.addEventListener("load", () => {
  //start your code here
  let outputResult = document.querySelector("output")
  let lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz".split('')
  let upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')
  let numberCharacters = "0123456789".split('')
  let specialCharacters = "!#$%&()*+,-./:;<=>?@[\\]^_{|}~".split('')

  document.addEventListener('submit', (event) => {
    // stay on the same page
    event.preventDefault();
    
    let input = document.getElementById("passwordLength")
    let passwordLength = input.value
    if (passwordLength < 4) {
      passwordLength = 4
    }
    let newPassword = ""
    for (let i = 0; i < passwordLength;) {
      if (i < passwordLength) {
      newPassword += lowerCaseCharacters[Math.floor(Math.random() * lowerCaseCharacters.length)]
        i++
      }
      if (i < passwordLength) {
      newPassword += upperCaseCharacters[Math.floor(Math.random() * upperCaseCharacters.length)]
        i++
      }
      if (i < passwordLength) {
      newPassword += numberCharacters[Math.floor(Math.random() * numberCharacters.length)]
        i++
      }
      if (i < passwordLength) {
      newPassword += specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
        i++
      }
      
    }
   outputResult.innerHTML = newPassword
  })
  
})