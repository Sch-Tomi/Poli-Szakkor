class Player {
  constructor(BE_cash, bet_id) {
      this.cash = BE_cash
      this.hand = []
      this.bet = 0

      this.register_bet_onchange(bet_id)
  }

  set_cash(money){
    this.cash += money
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

  get_point(){
    var summa = 0
    var volt_e_Ace = false

    for(var card of this.hand){
      if (card.GET_value() == 1) {
        volt_e_Ace = true
      }
      summa += card.GET_value()
    }

    if(volt_e_Ace){
      if(summa <= 11){
        summa += 10
      }
    }

    return summa

  }

  register_bet_onchange(id){
    console.log($("#"+id).val())
    $(document).on('change','#'+id, function(){
      console.log($(this).val());
      //Player.bet = $(this).val()

    })

  }
}
