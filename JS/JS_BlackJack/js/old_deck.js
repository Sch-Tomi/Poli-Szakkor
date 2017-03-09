class Deck {
    constructor() {


        this.original_deck = []
        this.mixed_deck = []

        this.setDeck()
    }

    setDeck(){

        var colors = ["kor","karo","treff","pick"]
        var names = [1,2,3,4,5,6,7,8,9,10,"J","Q","K","A"]

        for (let color of colors) {
            for (let name of names) {
                this.original_deck.push(new Card(color,name))
            }
        }
    }

    mixDeck(){
        this.mixed_deck = []
        $.extend(this.mixed_deck, this.original_deck)

        console.log(this.mixed_deck.length)

        var m = this.mixed_deck.length,t, i;

        console.log(m);

        // While there remain elements to shuffle…
        while (m) {

            // Pick a remaining element…
            i = Math.floor(Math.random() * m--);

            // And swap it with the current element.
            t = this.mixed_deck[m];
            this.mixed_deck[m] = this.mixed_deck[i];
            this.mixed_deck[i] = t;
        }

    }

}
