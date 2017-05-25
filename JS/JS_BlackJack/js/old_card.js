class Card {
    constructor(color, name) {
        this.color = color
        this.name = name
    }

    get toString(){
        return String(this.color).toLowerCase() + "_" + String(this.name).toUpperCase()
    }

    get value(){
        var value = parseInt(this.name)

        if (!isNaN(value)) {
            return value
        }else{
            switch (String(this.name)) {
                case "A":
                    return 1
                    break;
                case "K":
                case "Q":
                case "J":
                    return 10;
                    break;
                default:
                    return 0;
            }
        }


    }
}
