// Actions: Click square, toggle menu, reset game/scoreboard, reset only game

const App = {
  //all of our selected html elements
  $: {
     menu: document.querySelector('[data-id="menu"]'),
     menuItems: document.querySelector('[data-id="menu-items"]'),
     resetBtn: document.querySelector('[data-id="reset-btn"]'),
     newRoundBtn: document.querySelector('[data-id="new-round-btn"]'),
     squares: document.querySelectorAll('[data-id="square"]'),
  },

  init(){
    App.registerEventListeners()
  },

  registerEventListeners() {
    App.$.menu.addEventListener('click', event => {
      App.$.menuItems.classList.toggle('hidden')
    })

    App.$.resetBtn.addEventListener('click', event => {
      console.log('reset the game')
    })

    App.$.newRoundBtn.addEventListener('click', event => {
      console.log('Add new round')
    })

    App.$.squares.forEach(square => {
      square.addEventListener('click', (event) => {
        console.log(`Square with id ${event.target.id} was clicked`)

        const icon = document.createElement('i')
        icon.classList.add('fa-solid', 'fa-x', 'yellow')

        event.target.replaceChildren(icon)

        // <i class="fa-solid fa-o yellow"></i>
        // <i class="fa-solid fa-o turquoise"></i>
      })
    })
  }
}

window.addEventListener('load', App.init)


