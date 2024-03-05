const notas = [6, 6, 6];

let media = (notas[0] + notas[1] + notas[2])/notas.length

console.log("A primeira nota do aluno é " + notas[0])
console.log("A segunda nota do aluno é " + notas[1])
console.log("A terceira nota do aluno é " + notas[2])

console.log("A média das notas do aluno é " + media)


    if (media >= 7) {
        console.log("O aluno está APROVADO!");
    } else {
        console.log("O aluno está REPROVADO!");
    }
