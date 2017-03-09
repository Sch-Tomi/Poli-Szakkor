class Card {
    constructor(BE_szin, BE_erteke) {
        this.color = BE_szin
        this.value = BE_erteke
    }

    toHtmlClass(){
        return this.color+"_"+this.value
    }

    GET_value(){

        var value = parseInt(this.value)

        if(isNaN(value)){
            if(this.value == "A"){
                return 1
            }else{
                return 10
            }
        }else{
            return value
        }

    }

}
