const fabricantes = ['Mercedes', 'Audi', 'Fiat', 'BMW', 'Volksvagem', 'Ford', 'Renaut', 'Chevrolet']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.sort()
fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))

