/*Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, 
subtração,multiplicação e divisão desses valores*/

function operacoesFundamentais (x = 5, y = 8) {
    let soma = x + y
    let subtracao = x - y
    let multiplicacao = x * y
    let divisao = x / y
    return console.log(`Para os valores ${x} e ${y} temos: Soma = ${soma} / Subtração = ${subtracao} / Multipicação = ${multiplicacao} / Divisão = ${divisao.toFixed(2)}`)
}

operacoesFundamentais()
operacoesFundamentais(20, 10)


