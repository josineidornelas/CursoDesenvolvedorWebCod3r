function soBoaNoticia (nota) {
    if(nota >= 7) {
        console.log('Aprovado com a nota ' + nota + '. Parabéns!')
    }
}

soBoaNoticia(9.0)
soBoaNoticia(6.9)

function seForVerdadeEuFalo(valor) {
    if(valor) {
        console.log(valor + ' retorna um valor verdadeiro')
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1, 4, 7])
seForVerdadeEuFalo({})
