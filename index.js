
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
      const el = item.querySelector(`.${property}`)
      el.textContent = spell[property]
      el.setAttribute('title', spell[property])
    })

    // // collect an array of <span> elements
    // const childElements = properties.map((prop) => {
    //   return this.renderProperty(prop, spell[prop])
    // })

    // const item = document.createElement('li')
    // item.classList.add('spell')

    // // append each <span> to the <li>
    // childElements.forEach(function(el) {
    //   item.appendChild(el)
    // })

    // const delButton = document.createElement("input");
    // delButton.classList.add('delete')
    // delButton.setAttribute("type", "submit")
    // delButton.setAttribute("value", "Delete")

    // delButton.addEventListener(
    //   'click',
    //   this.removeSpell.bind(this, spell)
    // )

    // item.appendChild(delButton)

    // app.spellArray.push(spell)
    
    //Delete Button
    item
      .querySelector('button.delete')
      .addEventListener(
        'click',
        this.removeSpell.bind(this, spell)
      )
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
    }

    this.spellArray.push(spell)

    const item = this.renderItem(spell)

    const list = document.querySelector('#spells')
    list.appendChild(item)

    f.reset()
    f.spellName.focus()
  },
  

}

app.init()