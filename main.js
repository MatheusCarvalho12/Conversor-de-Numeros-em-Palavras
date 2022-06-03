let u = ["", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove",]
let d = ["", "", "vinte", "trinta", "quarenta", "cinqüenta", "sessenta", "setenta", "oitenta", "noventa"]
let c = ["", "cento", "duzentos", "trezentos", "quatrocentos", "quinhentos", "seiscentos", "setecentos", "oitocentos", "novecentos"]
let m = ["", "um mil", "dois mil", "três mil", "quatro mil", "cinco mil", "seis mil", "sete mil", "oito mil", "nove mil",]
let dm = ["", "", "vinte mil", "trinta mil", "quarenta mil", "cinqüenta mil", "sessenta mil", "setenta mil", "oitenta mil", "noventa mil"]
let cm = ["", "cem mil", "duzentos mil", "trezentos mil", "quatrocentos mil", "quinhentos mil", "seiscentos mil", "setecentos mil", "oitocentos mil", "novecentos mil"]
let mm = ["", "um milhão"]

function rodar() {
    //parametros de Verdadeiro ou Falso
    let v = 0
    let v2 = 0
    let v3 = 0
    let v4 = 0
    let receb 
    receb = document.getElementById("inp").value 
    document.getElementById("inp").value = "0000000"
    //reset
    document.getElementById("res6").innerHTML = ""
    document.getElementById("res5").innerHTML = ""
    document.getElementById("res4").innerHTML = ""
    document.getElementById("res3").innerHTML = ""
    document.getElementById("res2").innerHTML = ""
    document.getElementById("res1").innerHTML = ""
    document.getElementById("res0").innerHTML = ""
    document.getElementById("ecm").innerHTML = ""
    document.getElementById("edm").innerHTML = ""
    document.getElementById("ec").innerHTML = ""
    document.getElementById("ed").innerHTML = ""
    //acima de 1m
    let re2
    re2 = parseInt(receb)
    console.log(receb.length)
    if (re2 > 1000000 || receb.length != 7){
        alert("Numero invalido")
    }
    //milhão 0, centena de milhar 1, dezena de milhar 2, unidade de milhar 3, centena normal 4, dezena normal 5, unidade normal 6
    else{
            //dez ao 19
        if (receb[5] == "1" && receb[6] == "0"){
            document.getElementById('res5').innerHTML = `${ " " + "dez"}`
            v++
        }
        if (receb[6] == "1" && receb[5] == "1"){
            document.getElementById('res5').innerHTML = `${ " " + "onze"}`
            v++
        }
        if (receb[5] == "1" && receb[6] == "2"){
            document.getElementById('res5').innerHTML = `${ " " + "doze"}`
            v++
        }
        if (receb[5] == "1" && receb[6] == "3"){
            document.getElementById('res5').innerHTML = `${ " " + "treze"}`
            v++
        }
        if (receb[5] == "1" && receb[6] == "4"){
            document.getElementById('res5').innerHTML = `${ " " + "quatorze"}`
            v++
        }
        if (receb[5] == "1" && receb[6] == "5"){
            document.getElementById('res5').innerHTML = `${ " " + "quinze"}`
            v++
        }
        if (receb[5] == "1" && receb[6] == "6"){
            document.getElementById('res5').innerHTML = `${ " " + "dezesseis"}`
            v++
        }
        if (receb[5] == "1" && receb[6] == "7"){
            document.getElementById('res5').innerHTML = `${ " " + "dezessete"}`
            v++
        }
        if (receb[5] == "1" && receb[6] == "8"){
            document.getElementById('res5').innerHTML = `${ " " + "dezoito"}`
            v++
        }
        if (receb[5] == "1" && receb[6] == "9"){
            document.getElementById('res5').innerHTML = `${ " " + "dezenove"}`
            v++
        }
        //onze mil ao 19 mil
        if (receb[2] == "1" && receb[3] == "0"){
            document.getElementById('res2').innerHTML = `${ " " + "dez mil"}`
            v2++
        }
        if (receb[3] == "1" && receb[2] == "1"){
            document.getElementById('res2').innerHTML = `${ " " + "onze mil"}`
            v2++
        }
        if (receb[2] == "1" && receb[3] == "2"){
            document.getElementById('res2').innerHTML = `${ " " + "doze mil"}`
            v2++
        }
        if (receb[2] == "1" && receb[3] == "3"){
            document.getElementById('res2').innerHTML = `${ " " + "treze mil"}`
            v2++
        }
        if (receb[2] == "1" && receb[3] == "4"){
            document.getElementById('res2').innerHTML = `${ " " + "quatorze mil"}`
            v2++
        }
        if (receb[2] == "1" && receb[3] == "5"){
            document.getElementById('res2').innerHTML = `${ " " + "quinze mil"}`
            v2++
        }
        if (receb[2] == "1" && receb[3] == "6"){
            document.getElementById('res2').innerHTML = `${ " " + "dezesseis mil"}`
            v2++
        }
        if (receb[2] == "1" && receb[3] == "7"){
            document.getElementById('res2').innerHTML = `${ " " + "dezessete mil"}`
            v2++
        }
        if (receb[2] == "1" && receb[3] == "8"){
            document.getElementById('res2').innerHTML = `${ " " + "dezoito mil"}`
            v2++
        }
        if (receb[2] == "1" && receb[3] == "9"){
            document.getElementById('res2').innerHTML = `${ " " + "dezenove mil"}`
            v2++
        }
        //cem, mil
        if (receb[4] == "1" && receb[5] == 0 && receb[6] ==0){
            document.getElementById('res4').innerHTML = `${ " " + "cem"}`
            v3++
        }
        if (receb[3] == "1" && receb[2] == "0"){
            document.getElementById('res3').innerHTML = `${ " " + "mil"}`
            v4++
        }
        //laço para o resto dos numeros
        for (let index = 0; index < u.length; index++) { 
            if (receb.length <= 7){
                if (receb[6] == index && v == 0){
                    document.getElementById('res6').innerHTML = `${ " " + u[index]}`
                }
                if (receb[5] == index && v == 0){
                    document.getElementById('res5').innerHTML = `${ " " + d[index]}`
                }
                if (receb[4] == index && v3 == 0){
                    document.getElementById('res4').innerHTML = `${ " " + c[index]}`
                }
                if (receb[3] == index && v2 == 0 && v4 == 0){
                    document.getElementById('res3').innerHTML = `${ " " + m[index]}`
                }
                if (receb[2] == index && v2 == 0 && receb[3] == "0"){
                    document.getElementById('res2').innerHTML = `${ " " + dm[index]}`
                }
                if (receb[2] == index && v2 == 0 && receb[3] != "0"){
                    document.getElementById('res2').innerHTML = `${ " " + d[index]}`
                }
                if (receb[1] == index && receb[2] != "0"){
                    document.getElementById('res1').innerHTML = `${ " " + c[index]}`
                }
                if (receb[1] == index && receb[3] != "0"){
                    document.getElementById('res1').innerHTML = `${ " " + c[index]}`
                }
                if (receb[1] == index && receb[2] == "0" && receb[3] == "0"){
                    document.getElementById('res1').innerHTML = `${ " " + cm[index]}`
                }
                if (receb[0] == index){
                    document.getElementById('res0').innerHTML = `${ " " + mm[index]}`
                }
            }
            
            }
        //e 
        if (receb != "1000000" && receb != "0000000"){
            if (receb[1] != "0"){
                if (receb[4] == "0" && (receb[6] != "0" || receb[5] != "0")){
                    document.getElementById('ecm').innerHTML = "e"
                }
                if (receb[2] != "0"){
                    document.getElementById('ecm').innerHTML = "e"
                }
            }
            if (receb[4] != "0"){
                document.getElementById('ec').innerHTML = "e"
            }
            if (receb[2] != "0"){
                document.getElementById('edm').innerHTML = "e"
            }
            if (receb[5] != "0" && receb[5] != "1"){
                if (receb[6] != "0"){
                    document.getElementById('ed').innerHTML = "e"
                }
            }
        }
    }
}
