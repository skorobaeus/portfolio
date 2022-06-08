const userLanguage = window.localStorage.getItem("userLanguage")
const engSwitches = document.querySelectorAll('.language-switch-eng')
const rusSwitches = document.querySelectorAll('.language-switch-rus')
const eng = document.querySelector('.language-eng')
const rus = document.querySelector('.language-rus')

window.addEventListener('DOMContentLoaded', setLanguage)

engSwitches.forEach(engSwitch => {
  engSwitch.addEventListener('click', changeLanguage)
})

rusSwitches.forEach(rusSwitch => {
  rusSwitch.addEventListener('click', changeLanguage)
})

function toggleLanguage(switchesOn, switchesOff, boxOn, boxOff) {
  switchesOn.forEach(switchOn => {
    switchOn.classList.add('language-switch-active')
  })

  switchesOff.forEach(switchOff => {
    switchOff.classList.remove('language-switch-active')
  })  
  
  boxOn.classList.add('language-active')
  boxOff.classList.remove('language-active') 
}

function setLanguage() {
  if (!userLanguage) window.localStorage.setItem("userLanguage", "eng")
  if (userLanguage === "eng") toggleLanguage(engSwitches, rusSwitches, eng, rus)
  if (userLanguage === "rus") toggleLanguage(rusSwitches, engSwitches, rus, eng)
}

function changeLanguage(event) {
  if (userLanguage === "eng") window.localStorage.setItem("userLanguage", "rus")
  if (userLanguage === "rus") window.localStorage.setItem("userLanguage", "eng")
  if (event.target.value === "eng") toggleLanguage(engSwitches, rusSwitches, eng, rus)
  if (event.target.value === "rus") toggleLanguage(rusSwitches, engSwitches, rus, eng)
}