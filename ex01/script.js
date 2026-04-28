let mensagem = " "
let numero=Number (prompt("Digite um número;"))
for (let contador = 1; contador <= numero; contador++) {
    mensagem = ` ${mensagem} ${contador}`;
}
alert (mensagem)