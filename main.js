// Função construtora Animal (classe base)
function Animal(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

// Função Cachorro (herda de Animal)
function Cachorro(nome, idade, raca) {
    Animal.call(this, nome, idade);  // Herda propriedades de Animal
    this.raca = raca;
}

// Função Gato (herda de Animal)
function Gato(nome, idade, cor) {
    Animal.call(this, nome, idade);  // Herda propriedades de Animal
    this.cor = cor;
}

// Herdando o prototype de Animal
Cachorro.prototype = Object.create(Animal.prototype);
Cachorro.prototype.constructor = Cachorro;

Gato.prototype = Object.create(Animal.prototype);
Gato.prototype.constructor = Gato;

// Método para exibir o som de cada animal
Animal.prototype.emitirSom = function() {
    console.log("Som genérico de animal");
};

Cachorro.prototype.emitirSom = function() {
    console.log(`${this.nome} diz: Au Au!`);
};

Gato.prototype.emitirSom = function() {
    console.log(`${this.nome} diz: Miau!`);
};

// Criando instâncias de objetos
const cachorro1 = new Cachorro("Rex", 3, "Labrador");
const gato1 = new Gato("Mingau", 2, "Branco");
const cachorro2 = new Cachorro("Bolt", 5, "Pastor Alemão");

// Exibindo informações e som de cada animal
console.log(`${cachorro1.nome} tem ${cachorro1.idade} anos e é da raça ${cachorro1.raca}`);
cachorro1.emitirSom(); // "Rex diz: Au Au!"

console.log(`${gato1.nome} tem ${gato1.idade} anos e é da cor ${gato1.cor}`);
gato1.emitirSom(); // "Mingau diz: Miau!"

console.log(`${cachorro2.nome} tem ${cachorro2.idade} anos e é da raça ${cachorro2.raca}`);
cachorro2.emitirSom(); // "Bolt diz: Au Au!"
