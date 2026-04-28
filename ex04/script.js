let somaNotas = 0;

for (let contador = 1; contador <= 5; contador++) {
    let nota = Number(prompt(`Digite a ${contador} nota:`));
    somaNotas = somaNotas + nota;
}
let media = somaNotas / 5;
alert(`A média das 5 notas é: ${media}`);