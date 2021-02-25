/*Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus 
lados:Equilátero: Os três lados são iguais. Isósceles:  Dois lados iguais. 
Escaleno: Todos os lados são diferentes.Crie uma função que recebe os comprimentos 
dos três lados de um triângulo e retorne sua classificação quantoao tamanho 
de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de 
existência de umtriângulo).*/

/* Condição de existência de um triângulo (resolvi acrescentar para aumentar a dificuldade do exercício)
a < b + c
b < a + c
c < a + b
*/

function triangulo(a, b, c) {
    if((a < b + c) && (b < a + c) && (c < a + b)) {
        if((a == b) && (a == c)) {
            console.log(`Os segmentos de reta de valores ${a}, ${b} e ${c} formam um triângulo EQUILÁTERO.`)
        }else if(((a == b) && (a != c)) || ((b == c) && (b != a)) || ((a == c) && (a != b))) {
            console.log(`Os segmentos de reta de valores ${a}, ${b} e ${c} formam um triângulo ISÓCELES.`)
        }else if((a != b) && (a != c)) {
            console.log(`Os segmentos de reta de valores ${a}, ${b} e ${c} formam um triângulo ESCALENO.`)
        }
    } else{
        console.log(`Os segmentos de reta de valores ${a}, ${b} e ${c} não formam um triângulo.`)
    }
}

triangulo(3, 7, 10)
triangulo(3, 7, 8)
triangulo(3, 3, 4)
triangulo(3, 3, 3)