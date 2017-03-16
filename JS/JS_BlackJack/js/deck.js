class Deck {
    constructor() {
        this.original_deck = []
        this.mixed_deck = []

        this.init_original_deck()

        this.original_deck[2].toHtmlClass()
    }

    init_original_deck(){

        var colors = ["pick","treff","karo","kor"]
        var ertekek = [1,2,3,4,5,6,7,8,9,10,"J","Q","K","A"]

        for (var color of colors) {
            for (var ertek of ertekek) {
                this.original_deck.push(new Card(color, ertek))
            }
        }

    }

    mix_deck(){

        this.mixed_deck = []
        this.mixed_deck = JSON.parse(JSON.stringify(this.original_deck));

        var currentIndex = this.mixed_deck.length,
            temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = this.mixed_deck[currentIndex];
            this.mixed_deck[currentIndex] = this.mixed_deck[randomIndex];
            this.mixed_deck[randomIndex] = temporaryValue;
        }


    }


}
