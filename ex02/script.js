let soma = 0;

for (let contador = 1; contador <= 10; contador++) {
    let numero = Number (prompt(`Digite o ${contador} número:`))
    soma = soma + numero
}
alert (`A soma total é: ${soma}`)