function pessoa() {
    this.idade = 0

<<<<<<< HEAD
    const self = this
    setInterval(function() {
        self.idade++
        console.log(this.idade)
    }/*.bind(this)*/, 1000)
=======
    setInterval(function() {
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000)
>>>>>>> ddd1e801cc0cec80782253465e0ef254ceda01ec
}

new pessoa