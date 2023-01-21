// Função construtora -> objetos
// Função fabrica -> objetos
// Construtora -> Pessoa (new)

function Pessoa (nome, sobrenome){
    //Utilizando sem utilizar 'this' se torna métodos ou atributos privados,  não pode ser acessado fora do scopo
    const ID = 12345;
    const metodoInterno =  function () {

    };

    //Utilizando 'this' se torna métodos ou atributos publicos, pode ser acessado fora do scopo
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.metodo = function() {

        console.log(this.nome + ' : Sou um método')
    }
}

const p1 = new Pessoa('Luiz', 'Ótavio')
const p2 = new Pessoa('maria', 'Oliveira')

p2.metodo()
console.log(p1)
