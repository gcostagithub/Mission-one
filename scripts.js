

let botao = document.getElementById("botao")
let select = document.getElementById("select-moedas")


async function ConverterMoedas() {

    let moedas = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL").then(function(resposta){
        return resposta.json()
    })
    
    let euro = moedas.EURBRL.high
    let dolar = moedas.USDBRL.high

    //console.log(dolar)
    //console.log(euro)



    let inputValorEmReais = Number(document.getElementById("input").value)
    let inputMoedas = document.getElementById("input-moedas")
    let inputReal = document.getElementById("input-real")

    if (select.value === "US$ Dólar Americano") {
        console.log="Mudei pra dolar"
        let valorEmDolares = inputValorEmReais / dolar
        inputMoedas.innerHTML = valorEmDolares.toLocaleString("en-US", { style: "currency", currency: "USD" })
    }
    if (select.value === "€ Euro") {
        console.log="mudei pra euro"
        let valorEmEuros = inputValorEmReais / euro
        inputMoedas.innerHTML = valorEmEuros.toLocaleString("de-De", { style: "currency", currency: "EUR" })
    }

    inputReal.innerHTML = inputValorEmReais.toLocaleString("pt-br", { style: "currency", currency: "BRL" })
}

function trocaDeMoeda() {
    let textomoedas = document.getElementById("texto-moedas")
    let bandeiraMoedas = document.getElementById("bandeira-moedas")

    if (select.value === "US$ Dólar Americano") {
        //console.log("trocou moeda pra dólar")
        textomoedas.innerHTML = "Dólar Americano"
        bandeiraMoedas.src = "./img/eua.png"
    }
    if (select.value === "€ Euro") {
        //console.log("trocou moeda pra Euro")
        textomoedas.innerHTML = "Euro"
        bandeiraMoedas.src = "./img/euro.png"
    }
    ConverterMoedas()
}

botao.addEventListener("click", ConverterMoedas)
select.addEventListener("change", trocaDeMoeda)
//console.log(botao)

