$(document).ready(function(){

    var each = $("#buttons span.number").each(function() {
        $(this).on("click",function(){
            var tmp = $("#screen").text()
            var gomb_erteke = $(this).text()

            $("#screen").text(tmp + gomb_erteke)
        })
    })

    $("span.clear").on("click",function(){
        $("#screen").text("")
    })

    $("#buttons span.operator").each(function() {
        $(this).on("click",function(){
            var tmp = $("#screen").text()
            var gomb_erteke = $(this).text()

            $("#screen").text(tmp + " " + gomb_erteke + " ")
        })
    })

    $("span.eval").on("click", function() {
        var lengyel = lengyelForma($("#screen").text())
        var eredmeny = kiertekelo(lengyel)

        $("#screen").text( eredmeny )
    })


    // prec(x) > prec(y)
    function precedencia(x,y) {

        if (x == "+" || x == '-') {
            if (y == "+" || y == "-") {
                return true;
            }else {
                return false;
            }
        }else {
            if (x == "x" || x == "÷") {
                if (y == "x" || y == "÷" ) {
                    return true;
                }else {
                    return false;
                }
            }
        }

    }


    function lengyelForma(inputSzoveg){

        var szoveg = inputSzoveg.toString().split(" ")

        //console.log(szoveg)

        var verem = []
        var kimenet = ""

        for (var i = 0; i < szoveg.length; i++) {
            var x = szoveg[i]

            if(x / 1 == x){
                kimenet = kimenet + " " + x.toString()
            }

            if (isNaN(x / 1)) {

                console.log(x)

                while (verem.length != 0 && precedencia(verem[verem.length-1],x)) {
                        kimenet = kimenet+ " " + verem.pop()
                }

                verem.push(x)
            }
        }

        console.log(verem)

        while (verem.length > 0) {
            kimenet = kimenet + " " + verem.pop()
        }

        return kimenet
    }

    function kiertekelo(bemenet) {

        var verem = []
        var bemenetTomb = bemenet.split(" ")

        for (elem of bemenetTomb) {

            if(elem / 1 == elem){
                verem.push(elem)
            }else{
                var a = verem.pop()
                var b = verem.pop()

                console.log(a + " " + elem + " " + b + " = "+ operator_calc(a,elem,b))

                verem.push(operator_calc(b,elem,a))
            }
        }

        return verem.pop()
    }

    function operator_calc(a,operator,b) {

        a = parseInt(a)
        b = parseInt(b)

        switch (operator) {
            case "+":
                return a + b
                break;
            case "-":
                return a - b
                break;
            case "x":
                return a * b
                break;
            case "÷":
                return a / b
                break;
            default:
                return NULL
        }

    }

})
