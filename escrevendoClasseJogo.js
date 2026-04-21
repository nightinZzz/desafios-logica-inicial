class heroiAventura {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        switch (true) {
            case this.tipo === 'mago':
                console.log(`${this.nome} atacou usando magia!`);
                break
            case this.tipo === 'guerreiro':
                console.log(`${this.nome} atacou usando espada!`);
                break
            case this.tipo === 'monge':
                console.log(`${this.nome} atacou usando artes marciais!`);
                break
            case this.tipo === 'ninja':
                console.log(`${this.nome} atacou usando shuriken!`);
                break
        }

    }

}

let heroi1 = new heroiAventura('Gandalf', 2019, 'mago');
let heroi2 = new heroiAventura('Aragorn', 87, 'guerreiro');
let heroi3 = new heroiAventura('Tenzin', 30, 'monge');
let heroi4 = new heroiAventura('Naruto', 16, 'ninja');

heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();