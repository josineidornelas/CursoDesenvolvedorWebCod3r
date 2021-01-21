function teste(num) {
    if(num >= 7)
        console.log(num)

    console.log('Fim')
}

teste(8.9)
teste(3.6)

function teste2(num) {
    if(num > 7); {            //cuidado, nao usar o ";" nas estruturas de controle
        console.log(num)
    }
}

teste2(9.9)
teste2(6)
