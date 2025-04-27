//funções = bloco de código, usado  para uma funcionalidade específica só executado quando for chamado
 
/*exemplo 1 
function mensagem() {
    alert("Seja bem-vindo(a)!")
    console.log("Seja bem-vindo(a)!")
    console.log("Você é muito legal!")
}

mensagem ()*/

/*
exemplo 2
 function somar (numero1, numero2){
    console.log ( numero1 + numero2)
}

let numero1 = 40
let numero2 = 23

somar(numero1, numero2)
somar(30, 12)
somar(19, 289)*/

/*
exemplo 3
function raizQuadrada(numero){
    console.log(Math.sqrt(numero))
}

function potenciacao(valor1, valor2){
    console.log(Math.pow(valor1, valor2))
}

function multiplicacao (valor1, valor2){
    console.log(valor1 * valor2)
}

let numero1 = Number(prompt("Digite o número 1:"))
let numero2 = Number(prompt("Digite o número 2:"))

raizQuadrada(numero1)
potenciacao (numero1, numero2)
multiplicacao (numero2, numero1)*/

/*
exemplo 4
function raizQuadrada(numero){
   return Math.sqrt(numero)
}

function potenciacao(valor1, valor2){
    return Math.pow(valor1, valor2)
}

function multiplicacao (valor1, valor2){
    return valor1 * valor2
}

let numero1 = Number(prompt("Digite o número 1:"))
let numero2 = Number(prompt("Digite o número 2:"))

 let raiz1 = raizQuadrada(numero1)
 let raiz2 = raizQuadrada(numero2)

 console.log(raiz1, raiz2)*/

function boasVindas(nome, idade) {
    return `Seja bem-vindo(a), ${nome}! ${nome}, você é muito especial! Parabéns pelo seu aniversário de ${idade} anos.
    `
}

let nome = prompt("Digite seu nome:")
let idade = prompt("Digite sua idade:")

let mensagem = boasVindas(nome, idade)

alert(mensagem)
console.log(mensagem)