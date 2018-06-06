
// const button = document.querySelector('button')

// function changeHeading() {
//   const heading = document.querySelector('#hd2')
//   heading.textContent = 'New Spellbook'
// }

// button.addEventListener('click', changeHeading)

// const form = document.querySelector('form')


// const inputedHeading = function(ev){
//   ev.preventDefault()
//   const f = ev.target
//   const inputedValue = f.newText.value

//   document
//     .querySelector('#spells')
//     .innerHTML +=  '<p>' + inputedValue + '</p>'

//   f.reset()
// }

// form.addEventListener('submit', inputedHeading)


var created = 0;
function dynamicDropdown(ev) {
  ev.preventDefault()
  
  if (created == 1) {
    removeDrop();
  }

  // Call mainMenu the main dropdown menu
  var mainMenu = document.getElementById('mainMenu');

  //Create the new dropdown menu
  var whereToPut = document.getElementById('myDiv');
  var newDropdown = document.createElement('select');
  newDropdown.setAttribute('id',"newDropdownMenu");
  whereToPut.appendChild(newDropdown);

  

  let textField = "";
  if (mainMenu.value == "sadPotions") {
    textField = document.querySelector("#sadPotions").textContent
    var optionPotion = document.createElement("option");
    optionPotion.text = "Potions";
    newDropdown.appendChild(optionPotion, newDropdown.options[null]);

    var optionDeath = document.createElement("option");
    optionDeath.text = "Death";
    newDropdown.appendChild(optionDeath, newDropdown.options[null]);
    
    var optionLove = document.createElement("option");
    optionLove.text = "Love";
    newDropdown.appendChild(optionLove, newDropdown.options[null]);
    
    var optionLuck = document.createElement("option");
    optionLuck.text = "Luck";
    newDropdown.appendChild(optionLuck, newDropdown.options[null]);

} else if (mainMenu.value == "fantasticB") { 
    textField = document.querySelector("#fantasticB").textContent
    var optionBeastSpells = document.createElement("option");
    optionBeastSpells.text = "Spells to Understand Magical Beasts";
    newDropdown.add(optionBeastSpells, newDropdown.options[null]);

    var optionMagicFood = document.createElement("option");
    optionMagicFood.text = "Feed those Beasties";
    newDropdown.add(optionMagicFood, newDropdown.options[null]);
    
    var optionMakeFluffy = document.createElement("option");
    optionMakeFluffy.text = "They Need to be Fluffy Don't They?";
    newDropdown.add(optionMakeFluffy, newDropdown.options[null]);
    
    var optionRideThem = document.createElement("option");
    optionRideThem.text = "Care to take a Ride?";
    newDropdown.add(optionRideThem, newDropdown.options[null]);

}
else if (mainMenu.value == "wbE") { 
  textField = document.querySelector("#wbE").textContent;
  var optionWhat = document.createElement("option");
  optionWhat.text = "A Spell from the Worst Book Ever";
  newDropdown.add(optionWhat, newDropdown.options[null]);

  var optionRockSize = document.createElement("option");
  optionRockSize.text = "Do you need a rock to get bigger?";
  newDropdown.add(optionRockSize, newDropdown.options[null]);
  
  var optionSpikey = document.createElement("option");
  optionSpikey.text = "I make chairs Spikey!";
  newDropdown.add(optionSpikey, newDropdown.options[null]);
  
  var optionPoisonFood = document.createElement("option");
  optionPoisonFood.text = "I poison your food, but never an Enemy's!";
  newDropdown.add(optionPoisonFood, newDropdown.options[null]);

}

  let textFieldTwo = document.querySelector("#myDiv").textContent;


  const spells = document.querySelector("#spells")
  const node = document.createElement("LI");
  const spanNode = document.createElement("span");
  spanNode.textContent = `${textField} ${textFieldTwo}`;
  node.appendChild(spanNode);
  spells.appendChild(node)
  created = 1;
  

  //created = 1;
}
function removeDrop() {
  var d = document.getElementById('myDiv');

  var oldmenu = document.getElementById('newDropdownMenu');

  d.removeChild(oldmenu);
  created = 0;
}

const book = document.querySelector('select')
book.addEventListener('change', dynamicDropdown)

