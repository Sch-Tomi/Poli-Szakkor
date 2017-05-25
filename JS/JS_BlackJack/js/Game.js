class Game{

  // Gombok bekötése
  // Játék megirása osztás ell.
    // - osztás kártya megjelenik - bank a végén oszt magának
    // - kiszámolja
    // - eldönti nyert-e valaki
    // bank class

  constructor(){

    this.deck = new Deck()
    this.player = new Player()

    this.init_new_game_button()

  }

  new_game(){
    this.deck.mix_deck()

    this.player.put_card()

  }

  init_new_game_button(){

    $("#newGameButton").on('click', () => {
        console.log('2asd');
      this.new_game()
    })

  }

}
