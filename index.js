
const button = document.querySelector('button')

function changeHeading() {
  const heading = document.querySelector('#hd2')
  heading.textContent = 'New Spellbook'
}

button.addEventListener('click', changeHeading)

const button2 = document.querySelector('#Submit')
function inputedHeading(){
  const newName = document.querySelector('#hd2')
  const inputedValue = document.querySelector("#newText").value
  newName.textContent = inputedValue
}

button2.addEventListener('click', inputedHeading)