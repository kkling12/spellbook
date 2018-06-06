
const button = document.querySelector('button')

function changeHeading() {
  const heading = document.querySelector('#hd2')
  heading.textContent = 'New Spellbook'
}

button.addEventListener('click', changeHeading)

const form = document.querySelector('form')


const inputedHeading = function(ev){
  ev.preventDefault()
  const f = ev.target
  const inputedValue = f.newText.value

  document
    .querySelector('#spells')
    .innerHTML +=  '<p>' + inputedValue + '</p>'

  f.reset()
}

form.addEventListener('submit', inputedHeading)
