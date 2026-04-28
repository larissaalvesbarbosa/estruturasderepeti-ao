let mensagem = " "
let numero = Number(prompt("Digite um número para ver a tabuada:"));
let tabuada

for (let contador = 1; contador <= 10; contador++) {
    tabuada = (numero * contador)
    mensagem = `${mensagem} ${tabuada}`
}
alert (`A tabuada é: ${mensagem}`)