
const app = {

  init: function() {
    this.spellArray = []
    this.template = document.querySelector('.spell.template')

    const form = document.querySelector('form')
    form.addEventListener('submit', (ev) => {
      ev.preventDefault()
      this.handleSubmit(ev)
      
      console.log(this.spellArray)
    })
  },

  renderProperty: function(name, value) {
    const el = document.createElement('span')
    el.classList.add(name)
    el.textContent = value
    el.setAttribute('title', value)
    return el
  },

  renderItem: function(spell) {
    const item = this.template.cloneNode(true)
    item.classList.remove('template')

    // ['name', 'level']
    const properties = Object.keys(spell)

    properties.forEach(property => {
      if(property!="favorite"){
      const el = item.querySelector(`.${property}`)
      el.textContent = spell[property]
      el.setAttribute('title', spell[property])
      }
    })
    item
      .querySelector('button.delete')
      .addEventListener(
        'click',
        this.removeSpell.bind(this, spell)
      )

    item.appendChild(this.favButton(spell))

    return item

    //Fav Button

  },

  removeSpell: function(spell, ev) {
    const button = ev.target 
    const item = button.closest('.spell')
    item.parentNode.removeChild(item)

    const i = this.spellArray.indexOf(spell)
    this.spellArray.splice(i, 1)
  },

  handleSubmit: function(ev) {
    const f = ev.target

    const spell = {
      name: f.spellName.value,
      level: f.level.value,
      favorite: false,
    }

    this.spellArray.push(spell)

    const item = this.renderItem(spell)

    const list = document.querySelector('#spells')
    list.appendChild(item)
    
    

    f.reset()
    f.spellName.focus()
  },
  favButton: function(spell){
    const fav = document.createElement('button')
    fav.textContent = "Fav"
    fav.classList.add("fav")
    fav.addEventListener("click", this.toggleFavorite.bind(this, spell))
    return fav
    
  },
  toggleFavorite: function(spell, ev){
    const f = ev.target
    const item = f.closest(".spell")
    spell.favorite = !spell.favorite
    if(spell.favorite){
      item.classList.add("fav")
    }
    else{
      item.classList.remove("fav")
    }

  },
  

}

app.init()