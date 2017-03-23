class Game{

  constructor(){



    this.deck = new Deck()
    this.player = new Player()

    this.init_new_game_button()

  }

  new_game(){
    console.log('NEW GAME');

  }

  init_new_game_button(){

    $("#newGameButton").on('click', () => {
      this.new_game()
    })

  }

}
