class Bank {

  constructor() {
    this.hand = []
  }

  put_card(card){
    this.hand.push(card)
  }

  clear_hand(){
    this.hand = []
  }

  get_hand(){
    return this.hand
  }

}
