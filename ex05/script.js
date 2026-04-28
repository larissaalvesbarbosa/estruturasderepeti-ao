let mensagem = " "
let numeroA=Number (prompt("Digite um número;"))
let numeroB=Number (prompt("Digite um número;"))

for (let contador = numeroA; contador <= numeroB; contador++) {
    if (contador % 2 === 0)
    mensagem = ` ${mensagem} ${contador}`
}
alert(`Os números pares entre ${numeroA} e ${numeroB} são ${mensagem}`)