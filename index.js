
const button = document.querySelector('button')

function changeHeading() {
  const heading = document.querySelector('#hd2')
  heading.textContent = 'New Spellbook'
}

button.addEventListener('click', changeHeading)

const button2 = document.querySelector('#Submit')
function inputedHeading(){
  const newName = document.querySelector('#spells')
  const inputedValue = document.querySelector("#newText").value
  newName.innerHTML +=  '<p>' + inputedValue + '</p>'
}

function keyPress(){
  if(event.keycode == 13) inputedHeading
}

button2.addEventListener('click', inputedHeading)
button2.addEventListener('keydown', keyPress(event))
