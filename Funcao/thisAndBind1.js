const pessoa = {
    saudacao: 'BOm dia!',
    falar () {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcionala e OO

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()